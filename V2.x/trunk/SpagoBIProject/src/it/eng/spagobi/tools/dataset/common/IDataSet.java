/**
 * 
 */
package it.eng.spagobi.tools.dataset.common;

import java.util.HashMap;

import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;

/**
 * @author Angelo Bernabei
 *         angelo.bernabei@eng.it
 */
public interface IDataSet {
    /**
     * This method retrive the data
     */
    void loadData(HashMap parameters);
    
    /**
     * this method return the data retrived with "loadData"
     * @return
     */
    IDataStore getDataStore();
    
    IDataStore fetchNext();
    
    void setFetchSize(int l);
}
