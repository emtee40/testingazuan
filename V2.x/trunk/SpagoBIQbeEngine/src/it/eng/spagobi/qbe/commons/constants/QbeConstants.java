/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
package it.eng.spagobi.qbe.commons.constants;


// TODO: Auto-generated Javadoc
/**
 * The Class QbeConstants.
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 */
public class QbeConstants {
	
	/** The Constant USER_ID. */
	public static final String USER_ID = "userId";
	
	/** The Constant LOCALE. */
	public static final String LOCALE = "QBE_ENGINE_LOCALE";
	
	/** The Constant DATAMART_MODEL. */
	public static final String DATAMART_MODEL = "dataMartModel";	
	
	/** The Constant DATAMART_WIZARD. */
	public static final String DATAMART_WIZARD = "SINGLE_DATA_MART_WIZARD";
	
	/** The Constant LAST_UPDATE_TIMESTAMP. */
	public static final String LAST_UPDATE_TIMESTAMP =  "QBE_LAST_UPDATE_TIMESTAMP";	
	
	/** The Constant STANDALONE_MODE. */
	public static final String STANDALONE_MODE = "spagobi";	
	
	
	/** SpagoBIRequest se possibile non dovrebbe andare in session. TODO vedere se � possibile fare a mano di tale oggetto per il corretto funzionamento del qbe */
	public static final String SPAGOBI_REQUEST = "QBE_SPAGOBI_REQUEST";
	
	/** La gestione delle subqury deve essere totalmente delegata all'oggetto Query TODO verificare quali di questi parametri � ancora necessario. */
	public static final String QUERY_MODE = "QUERY_MODE";
	
	/** The Constant SUBQUERY_MODE. */
	public static final String SUBQUERY_MODE = "SUBQUERY_MODE";
	
	/** The Constant SUBQUERY_FIELD. */
	public static final String SUBQUERY_FIELD = "SUBQUERY_FIELD";
}
