/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2010 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.meta.oda.ui.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import it.eng.spagobi.commons.SpagoBIPlugin;

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
