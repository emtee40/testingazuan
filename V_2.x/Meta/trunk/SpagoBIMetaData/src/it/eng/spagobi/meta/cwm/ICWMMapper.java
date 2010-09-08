/**
 * 
 */
package it.eng.spagobi.meta.cwm;

import it.eng.spagobi.meta.model.physical.pojo.PhysicalModel;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public interface ICWMMapper {
	public PhysicalModel decodeModel(ICWM cwm);
	public ICWM encodeModel(PhysicalModel model);
}
