{type:"class",attributes:{"isStatic":"true","name":"Array","packageName":"qx.lang","fullName":"qx.lang.Array","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Helper functions for arrays.</p>\n\n<p>The native JavaScript Array is not modified by this class. However,\nthere are modifications to the native Array in {@link qx.lang.Core} for\nbrowsers that do not support certain JavaScript 1.6 features natively .</p>\n\n<p>The string/array generics introduced in JavaScript 1.6 are supported by\n{@link qx.lang.Generics}.</p>"}},
  {type:"methods-static",children:[
    {type:"method",attributes:{"isStatic":"true","name":"append"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"a"},children:[
          {type:"desc",attributes:{"text":"<p>the elements of this array will be appended to the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Append the elements of an array to the array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The modified array.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"clone"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array to copy</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return a copy of the given array\nThe same as {@link qx.lang.Array#copy}</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>copy of the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"contains"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>object to look for</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Whether the array contains the given element</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the array contains the element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"copy"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array to copy</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return a copy of the given array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>copy of the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"equals"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"array1"},children:[
          {type:"desc",attributes:{"text":"<p>first array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"array2"},children:[
          {type:"desc",attributes:{"text":"<p>second array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Check whether the two array have the same content. Checks only the\nequality of the arrays&#8217; content.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>Whether the two arrays are equal</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"fromArguments"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"args"},children:[
          {type:"desc",attributes:{"text":"<p>arguments object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"arguments"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert an arguments object into an array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a newly created array (copy) with the content of the arguments object.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"fromCollection"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"coll"},children:[
          {type:"desc",attributes:{"text":"<p>node collection</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Convert a (node) collection into an array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>a newly created array (copy) with the content of the node collection.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"fromShortHand"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"input"},children:[
          {type:"desc",attributes:{"text":"<p>array with one to four elements</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Expand shorthand definition to a four element list.\nThis is an utility function for padding/margin and all other shorthand handling.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>an array with four elements</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getFirst"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return the first element of an array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the first element of the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}},
          {type:"entry",attributes:{"type":"null"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"getLast"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Return the last element of an array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the last element of the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"insertAfter"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>object to be inserted</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj2"},children:[
          {type:"desc",attributes:{"text":"<p>insert obj1 after this object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Insert an element into the array after a given second element</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"insertAt"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>the element to insert</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"i"},children:[
          {type:"desc",attributes:{"text":"<p>position where to insert the element into the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Insert an element at a given position into the array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"insertBefore"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>object to be inserted</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj2"},children:[
          {type:"desc",attributes:{"text":"<p>insert obj1 before this object</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Insert an element into the array before a given second element</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"remove"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"obj"},children:[
          {type:"desc",attributes:{"text":"<p>element to be removed from the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove an element from the array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the removed element</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeAll"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remmove all elements from the array</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>empty array</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Array"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"isStatic":"true","name":"removeAt"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"arr"},children:[
          {type:"desc",attributes:{"text":"<p>the array</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Array"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"i"},children:[
          {type:"desc",attributes:{"text":"<p>index of the element to be removed</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Remove an element from the array at the given index</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The removed element.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]}
  ]}