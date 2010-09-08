/**
 * 
 */
package it.eng.spagobi.meta.cwm.jmi;

import java.util.Collection;
import java.util.List;

import it.eng.spagobi.meta.cwm.ICWM;
import it.eng.spagobi.meta.cwm.ICWMMapper;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import org.pentaho.pms.cwm.pentaho.meta.relational.CwmCatalog;
import org.pentaho.pms.cwm.pentaho.meta.relational.CwmTable;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class CWMMapperJMIImpl  implements ICWMMapper {
	
	
    // -----------------------------------------------------------------------------
	// DECODE
	// -----------------------------------------------------------------------------
    
	public PhysicalModel decodeModel(ICWM cwm) {
		return decodeModel((CWMJMIImpl)cwm);
	}
	
	public PhysicalModel decodeModel(CWMJMIImpl cwm) {
		PhysicalModel model = new PhysicalModel( cwm.getName() );
		
		model.setCatalog( cwm.getCatalog().getName() );
		
		return model;
	}

	// -----------------------------------------------------------------------------
	// ENDECODE
	// -----------------------------------------------------------------------------
	
	public CWMJMIImpl encodeModel(PhysicalModel model) {
		
		CWMJMIImpl cwm = new CWMJMIImpl(model.getName());
		
		CwmCatalog catalog = cwm.createCatalog(model.getCatalog());
		
		List<PhysicalTable> tables = model.getTables();
		CwmTable table;
		Collection<CwmTable> tc = catalog.getOwnedElement();
		for(int i = 0; i < tables.size(); i++) {
			table = encodeTable(cwm, tables.get(i));
			tc.add(table);	
			table.setNamespace(catalog);
		}
		
		return cwm;
	}	 
	
	public CwmTable encodeTable(CWMJMIImpl cwm, PhysicalTable table) {
		CwmTable t;
		t = cwm.createTable(table.getName());
		return t;
	}

}
