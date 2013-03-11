/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.oda.ui.impl;

import it.eng.spagobi.commons.SpagoBIPlugin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class SpagoBIMetaOdaUIPlugin extends SpagoBIPlugin {
	
	public static final String PLUGIN_ID = "it.eng.spagobi.meta.oda.ui"; //$NON-NLS-1$
	
	private static Logger logger = LoggerFactory.getLogger(SpagoBIMetaOdaUIPlugin.class);
	
	
	static {
		logger.debug("Plugin [{}] succesfully loaded", PLUGIN_ID);
	}
	
	private SpagoBIMetaOdaUIPlugin() {
		super(PLUGIN_ID);
	}
	
	private static SpagoBIMetaOdaUIPlugin instance;
	public static SpagoBIMetaOdaUIPlugin getInstance() {
		if(instance == null) instance = new SpagoBIMetaOdaUIPlugin();
		return instance;
	}
	
	
	
	
}
