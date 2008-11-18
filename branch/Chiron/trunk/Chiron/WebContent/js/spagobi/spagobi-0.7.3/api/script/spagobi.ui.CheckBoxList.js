{type:"class",attributes:{"name":"CheckBoxList","hasWarning":"true","packageName":"spagobi.ui","superClass":"qx.ui.layout.GridLayout","fullName":"spagobi.ui.CheckBoxList","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Class to create a list of check boxes</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"config"},children:[{type:"desc",attributes:{"text":"<p>The parameter is an object with the above properties.</p>"}}]}]},{type:"desc",attributes:{"text":"<p>Constructor to create a Checkbox List.</p>\n\n<p>It creates a list of checkboxes which belong to a single group element.</p>\n\n<p>Multiple checkboxes can be created and set to be checked.</p>\n\n<p>The parameter accepted by the constructor is an object with properties set for the \n checkbox list.</p>\n\n<p>Also see setAtom() and createCheckBoxList() methods.</p>\n\n<p>*Example :- *</p>\n\n<code>\n var checkBoxList = new spagobi.ui.CheckBoxList({\n									 	        	checked: config.checked,\n									 	        	top: 0,	\n 	        										left: config.left + 30,\n 	        										items: config.items,\n 	        										listeners: config.listeners,\n 	        										columns: config.columns\n 	        									});\n </code>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","hasError":"true","name":"_setAtom"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"81"}}]}]},{type:"method",attributes:{"hasError":"true","name":"createCheckBoxList"},children:[{type:"params",children:[{type:"param",attributes:{"name":"config"}}]},{type:"desc",attributes:{"text":"<p>Function to create the checkbox list element.</p>\n\n<p>It is called by the constructor.</p>\n\n<p>It accepts an object with the following properties:</p>\n\n<p>checked: To indicate if the checkbox is checked or not (true/false)</p>\n\n<p>items: Array of labels for the checkboxes</p>\n\n<p>columns: The number of columns in which the checkbox need to be displayed.</p>\n\n<p>*Example :- *</p>\n\n<code>\n createCheckBoxList({\n						checked: false,\n						top: 0,	\n 	        			left: 30,\n 	        			items: [\"aaaa\",\"bbbb\",\"cccc\"],\n 	        			columns: 4\n 	        			});"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>config</code> is not documented.","column":"23","line":"104"}}]}]},{type:"method",attributes:{"name":"getData"},children:[{type:"desc",attributes:{"text":"<p>Function to get the data of the checkbox list.</p>\n\n<p>The function returns an array of strings corrosponding to the labels of the \ncheckboxes which are selected.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Array of selected checkbox labels</p>"}}]}]},{type:"method",attributes:{"name":"setData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Array of strings containing the label of checkboxes which need to be set.</p>"}}]}]},{type:"desc",attributes:{"text":"<p>Function to set the data of the checkbox list.</p>\n\n<p>The function sets those checkboxes to true whose labels are provided in the parameter.</p>\n\n<p>Note that the existing selected checkboxes remain checked and are not reset.</p>"}}]}]}]}