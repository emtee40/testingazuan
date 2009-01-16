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
package it.eng.spagobi.services.common;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import org.apache.log4j.Logger;
import org.xml.sax.InputSource;

/**
 * Class that read engine-config.xml file
 */
public class EnginConf {
	private SourceBean config = null;
	private boolean ssoActive=false;
	private String resourcePath = null;
	private String spagoBiServerUrl = null;
	
	private static transient Logger logger = Logger.getLogger(EnginConf.class);

	private static EnginConf instance = null;
	
	/**
	 * Gets the instance.
	 * 
	 * @return EnginConf
	 */
	public static EnginConf getInstance(){
		if(instance==null) instance = new EnginConf();
		return instance;
	}
	
	private EnginConf() {
		try {
			logger.debug("Resource: " + getClass().getResource("/engine-config.xml"));
			if (getClass().getResource("/engine-config.xml")!=null){
				InputSource source=new InputSource(getClass().getResourceAsStream("/engine-config.xml"));
				config = SourceBean.fromXMLStream(source);   
				setSsoActive();
				setResourcePath();
				setSpagoBiServerUrl();
			}else logger.debug("Impossible to load configuration for report engine");
		} catch (SourceBeanException e) {
			logger.error("Impossible to load configuration for report engine", e);
		}
	}
	
	/**
	 * Gets the config.
	 * 
	 * @return SourceBean contain the configuration
	 */
	public SourceBean getConfig() {
		return config;
	}
	private void setSsoActive(){
	    SourceBean validateSB = (SourceBean)config.getAttribute("ACTIVE_SSO_JNDI_NAME");
	    String activeJndi = (String) validateSB.getCharacters();
	    String active= readJndiResource(activeJndi);
	    if (active != null && active.equals("true")) ssoActive= true;
	    else ssoActive= false;	    
	}
	
	/**
	 * Checks if is sso active.
	 * 
	 * @return true, if is sso active
	 */
	public boolean isSsoActive(){
	    return ssoActive;
	}
	
	/**
	 * Gets the pass.
	 * 
	 * @return the pass
	 */
	public String getPass(){
	    SourceBean passSB = (SourceBean)config.getAttribute("PASS");
	    String pass = (String) passSB.getCharacters();
	    return pass;
	}

	/**
	 * @return the resourcePath
	 */
	private void setResourcePath() {
		logger.debug("IN");
		SourceBean sb = (SourceBean)config.getAttribute("RESOURCE_PATH_JNDI_NAME");
		String path = (String) sb.getCharacters();
		resourcePath= readJndiResource(path);
		logger.debug("OUT");
	}

	
	private String readJndiResource(String jndiName) {
		logger.debug("IN");
		String value=null;
		try {
			Context ctx = new InitialContext();
			value  = (String)ctx.lookup(jndiName);
			logger.debug("jndiName: " + value);
			 
		} catch (NamingException e) {
		    logger.error(e);
		} catch (Exception e) {
		    logger.error(e);
		} catch (Throwable t) {
		    logger.error(t);
		} finally {
		    logger.debug("OUT.value="+value);
		}
		return value;
	}

	public String getResourcePath() {
	    return resourcePath;
	}

	public String getSpagoBiServerUrl() {
	    return spagoBiServerUrl;
	}

	private void setSpagoBiServerUrl() {
		logger.debug("IN");
		SourceBean sb = (SourceBean)config.getAttribute("SPAGOBI_SERVER_URL");
		String server = (String) sb.getCharacters();
		if (server!=null && server.length()>0){
		    spagoBiServerUrl=server;
		}else {
			sb = (SourceBean)config.getAttribute("SPAGOBI_SERVER_URL_JNDI_NAME");
			server = (String) sb.getCharacters();
			spagoBiServerUrl= readJndiResource(server);			    
		}

		logger.debug("OUT");

	}	
}
