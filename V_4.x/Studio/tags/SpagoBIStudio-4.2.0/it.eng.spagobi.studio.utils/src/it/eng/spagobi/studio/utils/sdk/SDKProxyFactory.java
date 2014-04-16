/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.studio.utils.sdk;

import it.eng.spagobi.sdk.proxy.DataSetsSDKServiceProxy;
import it.eng.spagobi.sdk.proxy.DataSourcesSDKServiceProxy;
import it.eng.spagobi.sdk.proxy.DocumentsServiceProxy;
import it.eng.spagobi.sdk.proxy.DomainsServiceProxy;
import it.eng.spagobi.sdk.proxy.EnginesServiceProxy;
import it.eng.spagobi.sdk.proxy.MapsSDKServiceProxy;
import it.eng.spagobi.studio.utils.bo.Server;
import it.eng.spagobi.studio.utils.exceptions.NoActiveServerException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SDKProxyFactory {

	private static Logger logger = LoggerFactory.getLogger(SDKProxyFactory.class);


	Server server = null;

	public SDKProxyFactory(Server _server) throws NoActiveServerException {
		super();
		logger.debug("IN");
		server = _server;
		//server = new ServerHandler().getCurrentActiveServer(projectname);
		if(server == null){
			logger.error("active server not defined");
			throw new NoActiveServerException();
		}
		logger.debug("active server "+server.getName());
		logger.debug("OUT");

	}


	public DocumentsServiceProxy getDocumentsServiceProxy() {
		DocumentsServiceProxy proxy = new DocumentsServiceProxy(server.getUser(), server.getPassword());
		String serverUrl = server.getUrl();
		if (serverUrl != null && !serverUrl.endsWith("/")) {
			serverUrl += "/";
		}
		proxy.setEndpoint(serverUrl + "sdk/DocumentsService");
		new ProxyDataRetriever().initProxyData(proxy, serverUrl);
		return proxy;
	}

	public EnginesServiceProxy getEnginesServiceProxy() {
		EnginesServiceProxy proxy = new EnginesServiceProxy(server.getUser(), server.getPassword());
		String serverUrl = server.getUrl();
		if (serverUrl != null && !serverUrl.endsWith("/")) {
			serverUrl += "/";
		}
		proxy.setEndpoint(serverUrl + "sdk/EnginesService");
		new ProxyDataRetriever().initProxyData(proxy, serverUrl);
		return proxy;
	}
	
	
	public DomainsServiceProxy getDomainsServiceProxy() {
		DomainsServiceProxy proxy = new DomainsServiceProxy(server.getUser(), server.getPassword());
		String serverUrl = server.getUrl();
		if (serverUrl != null && !serverUrl.endsWith("/")) {
			serverUrl += "/";
		}
		proxy.setEndpoint(serverUrl + "sdk/DomainsService");
		new ProxyDataRetriever().initProxyData(proxy, serverUrl);
		return proxy;
	}
	

	public DataSetsSDKServiceProxy getDataSetsSDKServiceProxy() {
		DataSetsSDKServiceProxy proxy = new DataSetsSDKServiceProxy(server.getUser(), server.getPassword());
		String serverUrl = server.getUrl();
		if (serverUrl != null && !serverUrl.endsWith("/")) {
			serverUrl += "/";
		}
		proxy.setEndpoint(serverUrl + "sdk/DataSetsSDKService");
		new ProxyDataRetriever().initProxyData(proxy, serverUrl);
		return proxy;
	}

	public DataSourcesSDKServiceProxy getDataSourcesSDKServiceProxy() {

		DataSourcesSDKServiceProxy proxy = new DataSourcesSDKServiceProxy(server.getUser(), server.getPassword());
		String serverUrl = server.getUrl();
		if (serverUrl != null && !serverUrl.endsWith("/")) {
			serverUrl += "/";
		}
		proxy.setEndpoint(serverUrl + "sdk/DataSourcesSDKService");
		new ProxyDataRetriever().initProxyData(proxy, serverUrl);
		return proxy;
	}

	public MapsSDKServiceProxy getMapsSDKServiceProxy() {
		MapsSDKServiceProxy proxy = new MapsSDKServiceProxy(server.getUser(), server.getPassword());
		String serverUrl = server.getUrl();
		if (serverUrl != null && !serverUrl.endsWith("/")) {
			serverUrl += "/";
		}
		proxy.setEndpoint(serverUrl + "sdk/MapsSDKService");
		new ProxyDataRetriever().initProxyData(proxy, serverUrl);
		return proxy;
	}


	public Server getServer() {
		return server;
	}


	public void setServer(Server server) {
		this.server = server;
	}








}
