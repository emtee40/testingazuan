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
package it.eng.spagobi.commons.resource;

import it.eng.spagobi.commons.exception.SpagoBIPluginException;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.text.MessageFormat;
import java.util.Properties;

import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.Platform;
import org.osgi.framework.Bundle;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class DefaultResourceLocator implements IResourceLocator {

	String pluginId;

	public Properties images;
	public Properties labels;
	public Properties settings;

	public static final String IMAGE_ROOT_FOOLDER = "icons";
	public static final String CONF_ROOT_FOOLDER = "conf";

	//private static Logger logger = LoggerFactory.getLogger(DefaultResourceLocator.class);

	public DefaultResourceLocator(String pluginId) {
		this.pluginId = pluginId;
		loadImages();
		loadLabels();
		loadSettings();
	}

	@Override
	public URL getBaseURL() {
		return null;
	}


	public URL getFileURL(String fileRelativePath) {

		URL fileURL;
		Bundle bundle;

		fileURL = null;

		bundle = Platform.getBundle(pluginId);
		if(bundle !=  null) {		
			//System.err.println("Boundle trovato");
			fileURL = bundle.getEntry(fileRelativePath);
			if(fileURL == null) {
				throw new SpagoBIPluginException("Impossible to resolve resource [" + fileRelativePath + "] to a valid URL");
			}

			try {
				fileURL = FileLocator.toFileURL(fileURL);
			} catch (IOException e) {
				throw new SpagoBIPluginException("Impossible to resolve URL [" + fileRelativePath + "] to a valid local URL");
			}
		} else {
			//System.err.println("Boundle NON trovato");
			File file = new File(fileRelativePath);
			try {
				fileURL =  file.toURL();
			} catch (MalformedURLException e) {
				throw new SpagoBIPluginException("Impossible to resolve resource [" + fileRelativePath + "] to a valid URL", e);
			}
		}


		//logger.debug("file [" + fileRelativePath + "] URL is equal to [" + fileURL + "]");

		return fileURL;
	}

	public File getFile(String fileRelativePath) {
		File toreturn;

		URL fileURL = getFileURL( fileRelativePath );
		try{
			String fullPath = fileURL.getFile();
			toreturn = new File(fullPath);	
		}
		catch (Exception e) {
			throw new SpagoBIPluginException("From the URL [" + fileURL + "] no file could be retrieved ", e);
		}

		return toreturn;
	}

	@Override
	public Object getImage(String key) {
		return getFileURL(getImagePath(key));
	}

	private String getImagePath(String imageKey) {
		String imagePath;

		imagePath = null;
		if(images.containsKey(imageKey)) {
			imagePath =  IMAGE_ROOT_FOOLDER + "/" + images.get(imageKey);
		} else {
			imagePath =  IMAGE_ROOT_FOOLDER + "/" + imageKey;
		}

		return imagePath;
	}

	private Properties loadProperties(String propertiesFile) {
		Properties properties = new Properties();
		URL resourceFileURL;

		resourceFileURL = null;
		try {
			resourceFileURL = getFileURL( CONF_ROOT_FOOLDER + "/" + propertiesFile );
		} catch(Throwable t) {
			//logger.warn("Impossible to load properties file [{}]", CONF_ROOT_FOOLDER + "/" + propertiesFile);
		}

		if(resourceFileURL != null) {
			try {
				properties.load( resourceFileURL.openStream() );
			} catch (IOException e) {
				//logger.error("Impossible to load propertis from URL [" + resourceFileURL + "]", e);
				System.err.println("Impossible to load propertis from URL [" + resourceFileURL + "]");
			}
		}

		//logger.debug("Succesfully loaded [{}] properties from file [{}]", properties.size(), resourceFileURL);
		//System.err.println("Succesfully loaded [" + properties.size() + "] properties from file [" + resourceFileURL + "]");


		return properties;
	}

	private void loadImages() {
		images = loadProperties("images.properties");
	}

	private void loadLabels() {
		labels = loadProperties("labels.properties");
	}

	private void loadSettings() {
		settings = loadProperties("settings.properties");
	}

	@Override
	public Object getProperty(String key) {
		return getProperty(key, null);
	}

	public Object getProperty(String key, Object defaultValue) {
		Object propertyValue;

		propertyValue = settings.getProperty(key);
		propertyValue = propertyValue != null? propertyValue: defaultValue;

		return propertyValue;
	}

	public String getPropertyAsString(String key) {
		return getPropertyAsString(key, null);
	}

	public String getPropertyAsString(String key, String defaultValue) {
		return (String)settings.getProperty(key, defaultValue);
	}

	public Integer getPropertyAsInteger(String key) {
		return getPropertyAsInteger(key, null);
	}

	public Integer getPropertyAsInteger(String key, Integer defaultValue) {
		Integer propertyValue;

		propertyValue = defaultValue;

		String str = getPropertyAsString(key);
		if(str != null) {
			try {
				propertyValue = Integer.parseInt(str.trim());
			} catch (Throwable t) {
				//logger.warn("Impossible to convert the value [" + propertyValue + "] of property  [" + key + "] to int", t);
			}
		}

		return propertyValue;
	}

	@Override
	public String getString(String key) {
		String label = labels.getProperty(key);
		return label != null? label: key;
	}

	@Override
	public String getString(String key, Object[] substitutions) {
		String label = labels.getProperty(key);
		label = (label != null)? label: key;
		MessageFormat form = new MessageFormat(label);
		Object[] translatedSubstitutions = new Object[substitutions.length];
		for(int i = 0; i < substitutions.length; i ++) {
			translatedSubstitutions[i] = getString((String)substitutions[i]);
		}

		label = form.format(translatedSubstitutions);

		return label;
	}

	@Override
	public String getString(String key, boolean translate) {
		return getString(key);
	}

	@Override
	public String getString(String key, Object[] substitutions,
			boolean translate) {
		return getString(key, substitutions);
	}

}
