/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.services.dataset.service;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.services.dataset.bo.SpagoBiDataSet;
import it.eng.spagobi.tools.dataset.bo.DataSetConfig;
import it.eng.spagobi.tools.dataset.common.DataSetImpl;
import it.eng.spagobi.tools.dataset.common.IDataSet;





/**
 * @author Angelo Bernabei
 *         angelo.bernabei@eng.it
 */
public class DataSetWsImpl {


    SpagoBiDataSet getDataSet(String token,String user,String datasetId){
	return null;
    }
    /**
     * 
     * @param token  String
     * @param user String
     * @param label String
     * @return SpagoBiDataSet
     */
    SpagoBiDataSet getDataSetByLabel(String token,String user,String label){
    	DataSetConfig ds=null;

    	try {
    		ds= DAOFactory.getDataSetDAO().loadDataSetByLabel(label);

		} catch (EMFUserError e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ds.toSpagoBiDataSet();

    }
    /**
     * 
     * @param token String
     * @param user String
     * @return SpagoBiDataSet[]
     */
    SpagoBiDataSet[] getAllDataSet(String token,String user){
	return null;
    }

}
