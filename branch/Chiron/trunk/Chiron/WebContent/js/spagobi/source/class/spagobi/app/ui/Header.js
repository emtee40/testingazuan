/*

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/


/* *
 * @author Andrea Gioia (andrea.gioia@eng.it)
 * @author Amit Rana (amit.rana@eng.it)
 * @author Gaurav Jauhri (gaurav.jauhri@eng.it)
 * 
 */

/**
 * Class to show the title text "SpagoBI - Chiron" on the top of the page
 * @see spagobi.app.Chiron#main
 */
 
qx.Class.define("spagobi.app.ui.Header",
{
  //extend : qx.legacy.ui.embed.HtmlEmbed,//change
  extend : qx.ui.container.Composite,
  //extend : qx.ui.embed.Html,

  /**
   * Constructor to show the title text using HTML tags
   */	
  construct : function()
  {
	this.setLayout(new qx.ui.layout.HBox);
    var html = '<div style="overflow:hidden; width:100%;background-image:url("/Chiron/img/spagobi/test/spagobiMiddle.png"); background-repeat: repeat-x;background-position:bottom;" >';
    html += '<div style="float:left"><img src="/Chiron/img/spagobi/test/spagobiLeft.png" /></div>';
    html += '<div style="float:right"><img src="/Chiron/img/spagobi/test/spagobiRight.png" /></div>';
    html += '</div>';
    var embed = new qx.ui.embed.Html(html);
    embed.setHeight(88);
    this.add( embed,{flex:1} );
	 
	 
  }
});

