/* SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package it.eng.spagobi.engines.whatif;

import it.eng.spagobi.engines.whatif.services.serializer.PivotJsonSerializer;
import it.eng.spagobi.engines.whatif.services.serializer.SerializationManager;

import java.util.Map;

import org.apache.log4j.Logger;
import org.olap4j.OlapConnection;

/**
 * @author ...
 */
public class WhatIfEngine {
	
	private static WhatIfEngineConfig engineConfig;
	
	/** Logger component. */
    private static transient Logger logger = Logger.getLogger(WhatIfEngine.class);
	
    // init engine
    static {
    	engineConfig = WhatIfEngineConfig.getInstance();
    }
    
    public static WhatIfEngineConfig getConfig() {
    	return engineConfig;
    }
    
	/**
	 * Creates the instance.
	 * 
	 * @param template the template
	 * @param env the env
	 * 
	 * @return the geo report engine instance
	 */
	public static WhatIfEngineInstance createInstance(Object template, Map env) {
		WhatIfEngineInstance whatIfEngineInstance = null;
		logger.debug("IN");
		whatIfEngineInstance = new WhatIfEngineInstance(template, env);
		initSerializers(whatIfEngineInstance.getOlapConnection());
		logger.debug("OUT");
		
		return whatIfEngineInstance;	
	}
	

	private static void initDeserializers() {
    	
	}


	private static void initSerializers(OlapConnection connection) {
		PivotJsonSerializer pjs = new PivotJsonSerializer(connection);
		SerializationManager.registerSerializer(pjs.getMimetype(), pjs);
	}
}
