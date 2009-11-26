package it.eng.spagobi.studio.core.bo;

import java.util.Vector;

import it.eng.spagobi.sdk.datasets.bo.SDKDataSet;
import it.eng.spagobi.sdk.datasets.bo.SDKDataStoreMetadata;
import it.eng.spagobi.sdk.datasources.bo.SDKDataSource;
import it.eng.spagobi.sdk.exceptions.MissingParameterValue;
import it.eng.spagobi.sdk.maps.bo.SDKFeature;
import it.eng.spagobi.sdk.maps.bo.SDKMap;
import it.eng.spagobi.sdk.proxy.DataSetsSDKServiceProxy;
import it.eng.spagobi.sdk.proxy.DataSourcesSDKServiceProxy;
import it.eng.spagobi.sdk.proxy.MapsSDKServiceProxy;
import it.eng.spagobi.studio.core.exceptions.NoServerException;
import it.eng.spagobi.studio.core.log.SpagoBILogger;
import it.eng.spagobi.studio.core.sdk.SDKProxyFactory;


public class SpagoBIServerObjects {



	public DataStoreMetadata getDataStoreMetadata(Integer datasetId) throws NoServerException, MissingParameterValue{
		SDKDataStoreMetadata sdkDataStoreMetadata=null;
		DataStoreMetadata toReturn=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			DataSetsSDKServiceProxy datasetsServiceProxy=proxyFactory.getDataSetsSDKServiceProxy();
			SDKDataSet sdkDataSet=datasetsServiceProxy.getDataSet(datasetId);

			sdkDataStoreMetadata=datasetsServiceProxy.getDataStoreMetadata(sdkDataSet);
		}
		catch (Exception e) {
			if(e instanceof MissingParameterValue){
				throw (MissingParameterValue)e;
			}
			else{
				SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve dataset metadata informations", e);
				throw(new NoServerException(e));
			}
		}
		if(sdkDataStoreMetadata!=null){
			toReturn=new DataStoreMetadata(sdkDataStoreMetadata);
		}
		return toReturn;
	}


	public DataSource getDataSourceById(Integer dsId) throws NoServerException{
		DataSource toReturn=null;
		SDKDataSource sdkDS=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			DataSourcesSDKServiceProxy dsServiceProxy=proxyFactory.getDataSourcesSDKServiceProxy();
			sdkDS = dsServiceProxy.getDataSource(dsId);
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve map informations", e);
			throw(new NoServerException(e));
		}	
		if(sdkDS!=null){
			toReturn=new DataSource(sdkDS);
		}
		return toReturn;	
	}


	public GeoFeature[] getFeaturesByMapId(Integer mapId) throws NoServerException{
		GeoFeature[] toReturn=null;
		SDKFeature[] sdkFeatures=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			MapsSDKServiceProxy mapsServiceProxy=proxyFactory.getMapsSDKServiceProxy();
			sdkFeatures =mapsServiceProxy.getMapFeatures(mapId);
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve map informations", e);
			throw(new NoServerException(e));
		}	

		if(sdkFeatures!=null){
			toReturn=new GeoFeature[sdkFeatures.length];
			for (int i = 0; i < sdkFeatures.length; i++) {
				SDKFeature sdkFeature=sdkFeatures[i];
				GeoFeature geoFeature=new GeoFeature(sdkFeature);
				toReturn[i]=geoFeature;
			}
		}
		return toReturn;	
	}

	

	public GeoMap getGeoMapById(Integer geoId) throws NoServerException{
		GeoMap toReturn=null;

		SDKMap sdkMap=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			MapsSDKServiceProxy mapsServiceProxy=proxyFactory.getMapsSDKServiceProxy();
			sdkMap=mapsServiceProxy.getMapById(geoId);
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve map informations", e);
			throw(new NoServerException(e));
		}	
		if(sdkMap!=null){
			toReturn=new GeoMap(sdkMap);

		}
		return toReturn;		

	}

	
	
	public Vector<GeoMap> getAllGeoMaps() throws NoServerException{
		Vector<GeoMap> toReturn=new Vector<GeoMap>();

		SDKMap[] sdkMaps=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			MapsSDKServiceProxy mapsServiceProxy=proxyFactory.getMapsSDKServiceProxy();
			sdkMaps=mapsServiceProxy.getMaps();
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve map informations", e);
			throw(new NoServerException(e));
		}	

		for (int i = 0; i < sdkMaps.length; i++) {
			SDKMap sdkMap=sdkMaps[i];
			GeoMap geoMap=new GeoMap(sdkMap);
			if(geoMap!=null){
				toReturn.add(geoMap);
			}
		}
		return toReturn;		

	}


	public Vector<Dataset> getAllDatasets() throws NoServerException{
		Vector<Dataset> toReturn=new Vector<Dataset>();

		SDKDataSet[] sdkDataSets=null;
		try{
			SDKProxyFactory proxyFactory=new SDKProxyFactory();
			DataSetsSDKServiceProxy datasetsServiceProxy=proxyFactory.getDataSetsSDKServiceProxy();
			sdkDataSets=datasetsServiceProxy.getDataSets();
		}
		catch (Exception e) {
			SpagoBILogger.errorLog("No comunication with SpagoBI server, could not retrieve dataset informations", e);
			throw(new NoServerException(e));
		}


		for (int i = 0; i < sdkDataSets.length; i++) {
			SDKDataSet sdkDataSet=sdkDataSets[i];
			Dataset dataset=new Dataset(sdkDataSet);
			if(dataset!=null){
				toReturn.add(dataset);
			}
		}
		return toReturn;		
	}


}
