{type:"class",attributes:{"name":"ITableModel","packageName":"qx.ui.table","implementations":"qx.ui.table.model.Abstract","fullName":"qx.ui.table.ITableModel","type":"interface"},children:[
  {type:"desc",attributes:{"text":"<p>The data model of a table.</p>"}},
  {type:"events",children:[
    {type:"event",attributes:{"name":"dataChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the table data changed (the stuff shown in the table body).\nThe data property of the event may be null or a map having the following attributes:\n<ul>\n  <li>firstRow: The index of the first row that has changed.</li>\n  <li>lastRow: The index of the last row that has changed.</li>\n  <li>firstColumn: The model index of the first column that has changed.</li>\n  <li>lastColumn: The model index of the last column that has changed.</li>\n</ul></p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]},
    {type:"event",attributes:{"name":"metaDataChanged"},children:[
      {type:"desc",attributes:{"text":"<p>Fired when the meta data changed (the stuff shown in the table header).</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}
        ]}
      ]}
    ]},
  {type:"constants",children:[
    {type:"constant",attributes:{"type":"String","name":"EVENT_TYPE_META_DATA_CHANGED","value":"metaDataChanged"},children:[
      {type:"desc",attributes:{"text":"<p>The type of the event fired when the meta data changed.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"string"}}
        ]}
      ]},
    {type:"constant",attributes:{"type":"String","name":"EVENT_TYPE_DATA_CHANGED","value":"dataChanged"},children:[
      {type:"desc",attributes:{"text":"<p>The type of the event fired when the data changed.</p>"}},
      {type:"types",children:[
        {type:"entry",attributes:{"type":"string"}}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"getColumnCount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the number of columns in the model.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number of columns.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnId"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the ID of column. The ID may be used to identify columns\nindependent from their index in the model. E.g. for being aware of added\ncolumns when saving the width of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the ID of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnIndexById"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the index of a column.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the index of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getColumnName"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the name of a column. This name will be shown to the user in the\ntable header.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the name of the column.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"String"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRowCount"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the number of rows in the model.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the number of rows.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getRowData"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"rowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the model index of the row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns the data of one row. This function may be overriden by models which hold\nall data of a row in one object. By using this function, clients have a way of\nquickly retrieving the entire row data.</p>\n\n<b>Important:</b>Models which do not have their row data accessible in one object\nmay return null."}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the row data as an object or null if the model does not support row data\n                   objects. The details on the object returned are determined by the model\n                   implementation only.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Object"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getSortColumnIndex"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the column index the model is sorted by. If the model is not sorted\n-1 is returned.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the column index the model is sorted by.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Integer"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"rowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of the row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns a cell value by column index.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The value of the cell.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#getValueById"}}
      ]},
    {type:"method",attributes:{"name":"getValueById"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnId"},children:[
          {type:"desc",attributes:{"text":"<p>the ID of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"rowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of the row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns a cell value by column ID.</p>\n\n<p>Whenever you have the choice, use {@link #getValue()} instead,\nbecause this should be faster.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the value of the cell.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isColumnEditable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the column to check.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns whether a column is editable.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the column is editable.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isColumnSortable"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the column to check.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Returns whether a column is sortable.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the column is sortable.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"isSortAscending"},children:[
      {type:"desc",attributes:{"text":"<p>Returns whether the model is sorted ascending.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>whether the model is sorted ascending.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"Boolean"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"prefetchRows"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"firstRowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of first row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"lastRowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of last row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Prefetches some rows. This is a hint to the model that the specified rows\nwill be read soon.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setValue"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>The index of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"rowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the index of the row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>The new value.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets a cell value by column index.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]},
      {type:"see",attributes:{"name":"#setValueById"}}
      ]},
    {type:"method",attributes:{"name":"setValueById"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnId"},children:[
          {type:"desc",attributes:{"text":"<p>The ID of the column.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"rowIndex"},children:[
          {type:"desc",attributes:{"text":"<p>The index of the row.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>The new value.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets a cell value by column ID.</p>\n\n<p>Whenever you have the choice, use {@link #setValue()} instead,\nbecause this should be faster.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"sortByColumn"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"columnIndex"},children:[
          {type:"desc",attributes:{"text":"<p>the column to sort by.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Integer"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"ascending"},children:[
          {type:"desc",attributes:{"text":"<p>whether to sort ascending.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Boolean"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sorts the model by a column.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]}
    ]}
  ]}