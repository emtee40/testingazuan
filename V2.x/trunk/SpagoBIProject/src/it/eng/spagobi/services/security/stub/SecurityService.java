/**
 * SecurityService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package it.eng.spagobi.services.security.stub;

public interface SecurityService extends java.rmi.Remote {
    public it.eng.spagobi.services.security.bo.SpagoBIUserProfile getUserProfile(java.lang.String in0) throws java.rmi.RemoteException;
    public boolean isAuthorized(java.lang.String in0, java.lang.String in1, java.lang.String in2) throws java.rmi.RemoteException;
    public boolean checkAuthorization(java.lang.String in0, java.lang.String in1) throws java.rmi.RemoteException;
}
