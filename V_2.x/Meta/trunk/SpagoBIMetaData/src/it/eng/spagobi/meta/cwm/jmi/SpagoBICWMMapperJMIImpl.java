/**
 * 
 */
package it.eng.spagobi.meta.cwm.jmi;

import it.eng.spagobi.meta.cwm.ICWM;
import it.eng.spagobi.meta.cwm.ICWMMapper;
import it.eng.spagobi.meta.cwm.jmi.spagobi.meta.relational.CwmCatalog;
import it.eng.spagobi.meta.cwm.jmi.spagobi.meta.relational.CwmTable;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.Collection;
import java.util.List;



/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class SpagoBICWMMapperJMIImpl  implements ICWMMapper {
	
	
    // -----------------------------------------------------------------------------
	// DECODE
	// -----------------------------------------------------------------------------
    
	public PhysicalModel decodeModel(ICWM cwm) {
		return decodeModel((SpagoBICWMJMIImpl)cwm);
	}
	
	public PhysicalModel decodeModel(SpagoBICWMJMIImpl cwm) {
		PhysicalModel model = new PhysicalModel( cwm.getName() );
		
		model.setCatalog( cwm.getCatalog().getName() );
		
		return model;
	}

	// -----------------------------------------------------------------------------
	// ENDECODE
	// -----------------------------------------------------------------------------
	
	public SpagoBICWMJMIImpl encodeModel(PhysicalModel model) {
		
		SpagoBICWMJMIImpl cwm = new SpagoBICWMJMIImpl(model.getName());
		
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
	
	public CwmTable encodeTable(SpagoBICWMJMIImpl cwm, PhysicalTable table) {
		CwmTable t;
		t = cwm.createTable(table.getName());
		return t;
	}

}
