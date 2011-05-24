package it.eng.spagobi.studio.utils.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *  This class method is called before SpagoBI Studio Operations
 *  used to ensure that the class loader is the one in SpagoBIUtilities and not Qbe one used by mtea
 * @author gavardi
 *
 */

public class ClassLoaderUtilities {

	private static Logger logger = LoggerFactory.getLogger(ClassLoaderUtilities.class);
	
	private static final String QBE_DYNAMIC_CLASS_LOADER = "class it.eng.qbe.classloader.DynamicClassLoader";
	
	static public void setSpagoBIClassLoader(){
		logger.debug("IN");
		ClassLoader defoutlClassLoader = Thread.currentThread().getContextClassLoader();
		String cl = defoutlClassLoader.getClass().toString();
		logger.debug("current class Loader "+cl );
		if(defoutlClassLoader.getClass().toString().equalsIgnoreCase(QBE_DYNAMIC_CLASS_LOADER)){
			logger.debug("set spagobi class Loader");
			ClassLoader previous = defoutlClassLoader.getParent();
			Thread.currentThread().setContextClassLoader(previous);
		}
		else{
			logger.debug("already spagobi class Loader");
		}
		logger.debug("OUT");
	}
	
	
}
