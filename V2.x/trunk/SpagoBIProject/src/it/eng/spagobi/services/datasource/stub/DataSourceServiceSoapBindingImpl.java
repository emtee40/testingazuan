/**
 * DataSourceServiceSoapBindingImpl.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.3 Oct 05, 2005 (05:23:37 EDT) WSDL2Java emitter.
 */

package it.eng.spagobi.services.datasource.stub;

import it.eng.spagobi.services.datasource.service.DataSourceServiceImpl;

public class DataSourceServiceSoapBindingImpl implements it.eng.spagobi.services.datasource.stub.DataSourceService{
    public it.eng.spagobi.services.datasource.bo.SpagoBiDataSource getDataSource(java.lang.String in0, java.lang.String in1, java.lang.String in2) throws java.rmi.RemoteException {
	DataSourceServiceImpl service=new DataSourceServiceImpl();
	return service.getDataSource(in0, in1,in2);
    }
    public it.eng.spagobi.services.datasource.bo.SpagoBiDataSource[] getAllDataSource(java.lang.String in0, java.lang.String in1) throws java.rmi.RemoteException {
	DataSourceServiceImpl service=new DataSourceServiceImpl();
	return service.getAllDataSource(in0,in1);
    }

}
