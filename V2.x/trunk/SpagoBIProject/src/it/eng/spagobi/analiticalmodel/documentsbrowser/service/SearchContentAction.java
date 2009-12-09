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

*/
package it.eng.spagobi.analiticalmodel.documentsbrowser.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.configuration.ConfigSingleton;
import it.eng.spagobi.analiticalmodel.document.bo.BIObject;
import it.eng.spagobi.chiron.serializer.SerializerFactory;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.utilities.SpagoBIUtilities;
import it.eng.spagobi.commons.utilities.indexing.IndexingConstants;
import it.eng.spagobi.commons.utilities.indexing.LuceneSearcher;
import it.eng.spagobi.utilities.exceptions.SpagoBIException;
import it.eng.spagobi.utilities.service.AbstractBaseHttpAction;
import it.eng.spagobi.utilities.service.JSONSuccess;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.CorruptIndexException;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryParser.ParseException;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.store.FSDirectory;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


/**
 * @author Antonella Giachino (antonella.giachino@eng.it)
 *
 */
public class SearchContentAction extends AbstractBaseHttpAction{
	
	// REQUEST PARAMETERS
	public static final String DOC_NAME = "docName";
	public static final String DOC_LABEL = "docLabel";
	public static final String DOC_DESCR = "docDescr";
	public static final String DOC_META = "docMeta";
	public static final String SIMILAR = "similar";
	
	
	// logger component
	private static Logger logger = Logger.getLogger(SearchContentAction.class);
	
	public void service(SourceBean request, SourceBean response) throws Exception {
		
		List objects;
		
		logger.debug("IN");
		
		try {
			setSpagoBIRequestContainer( request );
			setSpagoBIResponseContainer( response );
			
			Vector<String> fieldsToSearch = new Vector<String>();
			String valueFilter = getAttributeAsString(SpagoBIConstants.VALUE_FILTER);
			fieldsToSearch.add(IndexingConstants.CONTENTS);
			
			boolean onDocName = getAttributeAsBoolean(DOC_NAME);
			if(onDocName){
				fieldsToSearch.add(IndexingConstants.BIOBJ_NAME);
			}
			boolean onDocLabel = getAttributeAsBoolean(DOC_LABEL);
			if(onDocLabel){
				fieldsToSearch.add(IndexingConstants.BIOBJ_LABEL);
			}
			boolean onDocDescr = getAttributeAsBoolean(DOC_DESCR);
			if(onDocDescr){
				fieldsToSearch.add(IndexingConstants.BIOBJ_DESCR);
			}
			boolean onMeta = getAttributeAsBoolean(DOC_META);
			if(onMeta){
				fieldsToSearch.add(IndexingConstants.METADATA);
			}
			boolean similar = getAttributeAsBoolean(SIMILAR);

			logger.debug("Parameter [" + SpagoBIConstants.VALUE_FILTER + "] is equal to [" + valueFilter + "]");

			String indexBasePath = "";
			SourceBean jndiBean =(SourceBean)ConfigSingleton.getInstance().getAttribute("SPAGOBI.RESOURCE_PATH_JNDI_NAME");
			if (jndiBean != null) {
				String jndi = jndiBean.getCharacters();
				indexBasePath = SpagoBIUtilities.readJndiResource(jndi);
			}
			String index = indexBasePath+"\\idx";
			IndexReader reader;
			try{
				reader = IndexReader.open(FSDirectory.open(new File(index)), true);
				// read-only=true
				IndexSearcher searcher = new IndexSearcher(reader);
				
				
			    String[] fields = new String[fieldsToSearch.size()];			
			    fieldsToSearch.toArray(fields);

				//getting  documents
				ScoreDoc [] hits = null;
				if(similar){
					hits = LuceneSearcher.searchIndexFuzzy(searcher, valueFilter, index, fields);
				}else{
					hits = LuceneSearcher.searchIndex(searcher, valueFilter, index, fields);
				}
				objects = new ArrayList();
				if(hits != null) {
	                for(int i=0; i<hits.length; i++) {
	                	
	        	    	ScoreDoc hit = hits[i];
	        	    	Document doc = searcher.doc(hit.doc);
	        	        String biobjId = doc.get(IndexingConstants.BIOBJ_ID);
	        	        BIObject obj =DAOFactory.getBIObjectDAO().loadBIObjectForDetail(Integer.valueOf(biobjId));        	        
	        	        
	        	        objects.add(obj);
	                }
				}
				searcher.close();
			} catch (CorruptIndexException e) {
				logger.error(e.getMessage());
				throw new SpagoBIException("Index corrupted", e);
				
			} catch (IOException e) {
				logger.error(e.getMessage());
				throw new SpagoBIException("Unable to read index", e);
				
			} // only searching, so
			catch (ParseException e) {
				logger.error(e.getMessage());
				throw new SpagoBIException("Wrong query syntax", e);
				
			}
			
		
			JSONArray documentsJSON = (JSONArray)SerializerFactory.getSerializer("application/json").serialize( objects,Locale.ENGLISH);
			JSONObject documentsResponseJSON =  createJSONResponseDocuments(documentsJSON);
		
			try {
				writeBackToClient( new JSONSuccess( createJSONResponse(documentsResponseJSON) ) );
			} catch (IOException e) {
				throw new SpagoBIException("Impossible to write back the responce to the client", e);
			}
			
		} catch (Throwable t) {
			throw new SpagoBIException("An unexpected error occured while executing " + getActionName(), t);
		} finally {
			logger.debug("OUT");
		}
	}
	
	/**
	 * Creates a json array with children document informations
	 * @param rows
	 * @return
	 * @throws JSONException
	 */
	private JSONObject createJSONResponseDocuments(JSONArray rows) throws JSONException {
		JSONObject results;
		
		results = new JSONObject();
		results.put("title", "Documents");
		results.put("icon", "document.png");
		results.put("samples", rows);
		return results;
	}


	/**
	 * Creates a json array with children document informations
	 * @param rows
	 * @return
	 * @throws JSONException
	 */
	private JSONObject createJSONResponse(JSONObject documents) throws JSONException {
		JSONObject results = new JSONObject();
		JSONArray folderContent = new JSONArray();

		folderContent.put(documents);
		results.put("folderContent", folderContent);
		
		return results;
	}
}
