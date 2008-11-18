{type:"class",attributes:{"name":"ICellRenderer","packageName":"qx.ui.table","implementations":"qx.ui.table.cellrenderer.Abstract","fullName":"qx.ui.table.ICellRenderer","type":"interface"},children:[
  {type:"desc",attributes:{"text":"<p>A cell renderer for data cells.</p>"}},
  {type:"methods",children:[
    {type:"method",attributes:{"name":"createDataCellHtml"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"cellInfo"},children:[
          {type:"desc",attributes:{"text":"<p>A map containing the information about the cell to\n    create.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Map"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"htmlArr"},children:[
          {type:"desc",attributes:{"text":"<p>Target string container. The <span class=\"caps\">HTML</span> of the data\n    cell should be appended to this array.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String","dimensions":"1"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Creates the <span class=\"caps\">HTML</span> for a data cell.</p>\n\n<p>The cellInfo map contains the following properties:\n<ul>\n<li>value (var): the cell&#8217;s value.</li>\n<li>rowData (var): contains the row data for the row, the cell belongs to.\n  The kind of this object depends on the table model, see\n  {@link TableModel#getRowData()}</li>\n<li>row (int): the model index of the row the cell belongs to.</li>\n<li>col (int): the model index of the column the cell belongs to.</li>\n<li>table (qx.ui.table.Table): the table the cell belongs to.</li>\n<li>xPos (int): the x position of the cell in the table pane.</li>\n<li>selected (boolean): whether the cell is selected.</li>\n<li>focusedRow (boolean): whether the cell is in the same row as the\n  focused cell.</li>\n<li>editable (boolean): whether the cell is editable.</li>\n<li>style (string): The <span class=\"caps\">CSS</span> styles that should be applied to the outer <span class=\"caps\">HTML</span>\n  element.</li>\n</ul></p>"}}
      ]}
    ]}
  ]}