/**
 * DocumentExecuteServiceSoapBindingSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.3 Oct 05, 2005 (05:23:37 EDT) WSDL2Java emitter.
 */

package it.eng.spagobi.services.execute.stub;

public class DocumentExecuteServiceSoapBindingSkeleton implements it.eng.spagobi.services.execute.stub.DocumentExecuteService, org.apache.axis.wsdl.Skeleton {
    private it.eng.spagobi.services.execute.stub.DocumentExecuteService impl;
    private static java.util.Map _myOperations = new java.util.Hashtable();
    private static java.util.Collection _myOperationsList = new java.util.ArrayList();

    /**
    * Returns List of OperationDesc objects with this name
    */
    public static java.util.List getOperationDescByName(java.lang.String methodName) {
        return (java.util.List)_myOperations.get(methodName);
    }

    /**
    * Returns Collection of OperationDescs
    */
    public static java.util.Collection getOperationDescs() {
        return _myOperationsList;
    }

    static {
        org.apache.axis.description.OperationDesc _oper;
        org.apache.axis.description.FaultDesc _fault;
        org.apache.axis.description.ParameterDesc [] _params;
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "in0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "in1"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "in2"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "in3"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://xml.apache.org/xml-soap", "Map"), java.util.HashMap.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("executeChart", _params, new javax.xml.namespace.QName("", "executeChartReturn"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "base64Binary"));
        _oper.setElementQName(new javax.xml.namespace.QName("urn:spagobiexecute", "executeChart"));
        _oper.setSoapAction("");
        _myOperationsList.add(_oper);
        if (_myOperations.get("executeChart") == null) {
            _myOperations.put("executeChart", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("executeChart")).add(_oper);
    }

    public DocumentExecuteServiceSoapBindingSkeleton() {
        this.impl = new it.eng.spagobi.services.execute.stub.DocumentExecuteServiceSoapBindingImpl();
    }

    public DocumentExecuteServiceSoapBindingSkeleton(it.eng.spagobi.services.execute.stub.DocumentExecuteService impl) {
        this.impl = impl;
    }
    public byte[] executeChart(java.lang.String in0, java.lang.String in1, java.lang.String in2, java.util.HashMap in3) throws java.rmi.RemoteException
    {
        byte[] ret = impl.executeChart(in0, in1, in2, in3);
        return ret;
    }

}
