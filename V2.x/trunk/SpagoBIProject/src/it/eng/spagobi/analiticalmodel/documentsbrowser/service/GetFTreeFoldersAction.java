/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2009 Engineering Ingegneria Informatica S.p.A.

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

**/
package it.eng.spagobi.analiticalmodel.documentsbrowser.service;

import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import it.eng.spago.base.SourceBean;
import it.eng.spagobi.utilities.exceptions.SpagoBIException;
import it.eng.spagobi.utilities.service.AbstractBaseHttpAction;
import it.eng.spagobi.utilities.service.JSONSuccess;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class GetFTreeFoldersAction extends AbstractBaseHttpAction{
	
	// logger component
	private static Logger logger = Logger.getLogger(GetFTreeFoldersAction.class);
	
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		List engines;
		
		logger.debug("IN");
		
		try {
			setSpagoBIRequestContainer( request );
			setSpagoBIResponseContainer( response );
			
			String nodeId = this.getAttributeAsString("node");
			
			JSONArray jsonFTree = new JSONArray();
			JSONArray jsonFolder1Content = new JSONArray();
			jsonFolder1Content.put(createNode("SubFolder1_1", "SubFolder1", "icon-ftree-folder", null));
			jsonFolder1Content.put(createNode("SubFolder1_2", "SubFolder2", "icon-ftree-folder", null));
			jsonFolder1Content.put(createNode("SubFolder1_3", "SubFolder3", "icon-ftree-folder", null));
			jsonFolder1Content.put(createNode("SubFolder1_4", "SubFolder4", "icon-ftree-folder", null));
			JSONArray jsonFolder2Content = new JSONArray();
			jsonFolder2Content.put(createNode("SubFolder2_1", "SubFolder1", "icon-ftree-folder", null));
			jsonFolder2Content.put(createNode("SubFolder2_2", "SubFolder2", "icon-ftree-folder", null));
			jsonFolder2Content.put(createNode("SubFolder2_3", "SubFolder3", "icon-ftree-folder", null));
			JSONArray jsonFolder3Content = new JSONArray();
			jsonFolder3Content.put(createNode("SubFolder3_1", "SubFolder1", "icon-ftree-folder", null));
			
			if(nodeId == null) {
				jsonFTree.put(createNode("Folder1", "XFolder1", "icon-ftree-folder", jsonFolder1Content));
				jsonFTree.put(createNode("Folder2", "XFolder2", "icon-ftree-folder", jsonFolder2Content));
				jsonFTree.put(createNode("Folder3", "XFolder3", "icon-ftree-folder", jsonFolder3Content));
			} else if(nodeId.equalsIgnoreCase("Folder1")) {
				jsonFTree = jsonFolder1Content;
			} else if(nodeId.equalsIgnoreCase("Folder2")) {
				jsonFTree = jsonFolder2Content;
			} else if(nodeId.equalsIgnoreCase("Folder3")) {
				jsonFTree = jsonFolder3Content;
			} else {
				jsonFTree.put(createNode("Folder1", "Folder1", "icon-ftree-folder", jsonFolder1Content));
				jsonFTree.put(createNode("Folder2", "Folder2", "icon-ftree-folder", jsonFolder2Content));
				jsonFTree.put(createNode("Folder3", "Folder3", "icon-ftree-folder", jsonFolder3Content));
			}
			
			try {
				writeBackToClient( new JSONSuccess( jsonFTree ) );
			} catch (IOException e) {
				throw new SpagoBIException("Impossible to write back the responce to the client", e);
			}
		} catch (Throwable t) {
			throw new SpagoBIException("An unexpected error occured while executing GET_FTREE_FOLDERS_ACTION", t);
		} finally {
			logger.debug("OUT");
		}
	}
	
	private JSONObject createNode(String id, String text, String type, JSONArray children) {
		JSONObject node = new JSONObject();
		try {
			node.put("id", id);
			node.put("text", text );
			node.put("iconCls", type);
			
			JSONObject nodeAttributes = new JSONObject();
			nodeAttributes.put("iconCls", type);
			nodeAttributes.put("type", type);
			node.put("attributes", nodeAttributes);
			
			if(children != null) {
				//node.put("children", children);
			} else {
				node.put("leaf", true);
			}
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return node;		
	}
}
