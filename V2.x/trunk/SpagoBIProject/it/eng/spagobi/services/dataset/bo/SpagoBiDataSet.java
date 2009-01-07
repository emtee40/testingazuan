/**
 * SpagoBiDataSet.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.3 Oct 05, 2005 (05:23:37 EDT) WSDL2Java emitter.
 */

package it.eng.spagobi.services.dataset.bo;

public class SpagoBiDataSet  implements java.io.Serializable {
    private java.lang.String adress;

    private it.eng.spagobi.services.datasource.bo.SpagoBiDataSource dataSource;

    private java.lang.String description;

    private int dsId;

    private java.lang.String executorClass;

    private java.lang.String fileName;

    private java.lang.String javaClassName;

    private java.lang.String label;

    private java.lang.String name;

    private java.lang.String operation;

    private java.lang.String parameters;

    private java.lang.String query;

    private java.lang.String script;

    private java.lang.String type;

    public SpagoBiDataSet() {
    }

    public SpagoBiDataSet(
           java.lang.String adress,
           it.eng.spagobi.services.datasource.bo.SpagoBiDataSource dataSource,
           java.lang.String description,
           int dsId,
           java.lang.String executorClass,
           java.lang.String fileName,
           java.lang.String javaClassName,
           java.lang.String label,
           java.lang.String name,
           java.lang.String operation,
           java.lang.String parameters,
           java.lang.String query,
           java.lang.String script,
           java.lang.String type) {
           this.adress = adress;
           this.dataSource = dataSource;
           this.description = description;
           this.dsId = dsId;
           this.executorClass = executorClass;
           this.fileName = fileName;
           this.javaClassName = javaClassName;
           this.label = label;
           this.name = name;
           this.operation = operation;
           this.parameters = parameters;
           this.query = query;
           this.script = script;
           this.type = type;
    }


    /**
     * Gets the adress value for this SpagoBiDataSet.
     * 
     * @return adress
     */
    public java.lang.String getAdress() {
        return adress;
    }


    /**
     * Sets the adress value for this SpagoBiDataSet.
     * 
     * @param adress
     */
    public void setAdress(java.lang.String adress) {
        this.adress = adress;
    }


    /**
     * Gets the dataSource value for this SpagoBiDataSet.
     * 
     * @return dataSource
     */
    public it.eng.spagobi.services.datasource.bo.SpagoBiDataSource getDataSource() {
        return dataSource;
    }


    /**
     * Sets the dataSource value for this SpagoBiDataSet.
     * 
     * @param dataSource
     */
    public void setDataSource(it.eng.spagobi.services.datasource.bo.SpagoBiDataSource dataSource) {
        this.dataSource = dataSource;
    }


    /**
     * Gets the description value for this SpagoBiDataSet.
     * 
     * @return description
     */
    public java.lang.String getDescription() {
        return description;
    }


    /**
     * Sets the description value for this SpagoBiDataSet.
     * 
     * @param description
     */
    public void setDescription(java.lang.String description) {
        this.description = description;
    }


    /**
     * Gets the dsId value for this SpagoBiDataSet.
     * 
     * @return dsId
     */
    public int getDsId() {
        return dsId;
    }


    /**
     * Sets the dsId value for this SpagoBiDataSet.
     * 
     * @param dsId
     */
    public void setDsId(int dsId) {
        this.dsId = dsId;
    }


    /**
     * Gets the executorClass value for this SpagoBiDataSet.
     * 
     * @return executorClass
     */
    public java.lang.String getExecutorClass() {
        return executorClass;
    }


    /**
     * Sets the executorClass value for this SpagoBiDataSet.
     * 
     * @param executorClass
     */
    public void setExecutorClass(java.lang.String executorClass) {
        this.executorClass = executorClass;
    }


    /**
     * Gets the fileName value for this SpagoBiDataSet.
     * 
     * @return fileName
     */
    public java.lang.String getFileName() {
        return fileName;
    }


    /**
     * Sets the fileName value for this SpagoBiDataSet.
     * 
     * @param fileName
     */
    public void setFileName(java.lang.String fileName) {
        this.fileName = fileName;
    }


    /**
     * Gets the javaClassName value for this SpagoBiDataSet.
     * 
     * @return javaClassName
     */
    public java.lang.String getJavaClassName() {
        return javaClassName;
    }


    /**
     * Sets the javaClassName value for this SpagoBiDataSet.
     * 
     * @param javaClassName
     */
    public void setJavaClassName(java.lang.String javaClassName) {
        this.javaClassName = javaClassName;
    }


    /**
     * Gets the label value for this SpagoBiDataSet.
     * 
     * @return label
     */
    public java.lang.String getLabel() {
        return label;
    }


    /**
     * Sets the label value for this SpagoBiDataSet.
     * 
     * @param label
     */
    public void setLabel(java.lang.String label) {
        this.label = label;
    }


    /**
     * Gets the name value for this SpagoBiDataSet.
     * 
     * @return name
     */
    public java.lang.String getName() {
        return name;
    }


    /**
     * Sets the name value for this SpagoBiDataSet.
     * 
     * @param name
     */
    public void setName(java.lang.String name) {
        this.name = name;
    }


    /**
     * Gets the operation value for this SpagoBiDataSet.
     * 
     * @return operation
     */
    public java.lang.String getOperation() {
        return operation;
    }


    /**
     * Sets the operation value for this SpagoBiDataSet.
     * 
     * @param operation
     */
    public void setOperation(java.lang.String operation) {
        this.operation = operation;
    }


    /**
     * Gets the parameters value for this SpagoBiDataSet.
     * 
     * @return parameters
     */
    public java.lang.String getParameters() {
        return parameters;
    }


    /**
     * Sets the parameters value for this SpagoBiDataSet.
     * 
     * @param parameters
     */
    public void setParameters(java.lang.String parameters) {
        this.parameters = parameters;
    }


    /**
     * Gets the query value for this SpagoBiDataSet.
     * 
     * @return query
     */
    public java.lang.String getQuery() {
        return query;
    }


    /**
     * Sets the query value for this SpagoBiDataSet.
     * 
     * @param query
     */
    public void setQuery(java.lang.String query) {
        this.query = query;
    }


    /**
     * Gets the script value for this SpagoBiDataSet.
     * 
     * @return script
     */
    public java.lang.String getScript() {
        return script;
    }


    /**
     * Sets the script value for this SpagoBiDataSet.
     * 
     * @param script
     */
    public void setScript(java.lang.String script) {
        this.script = script;
    }


    /**
     * Gets the type value for this SpagoBiDataSet.
     * 
     * @return type
     */
    public java.lang.String getType() {
        return type;
    }


    /**
     * Sets the type value for this SpagoBiDataSet.
     * 
     * @param type
     */
    public void setType(java.lang.String type) {
        this.type = type;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SpagoBiDataSet)) return false;
        SpagoBiDataSet other = (SpagoBiDataSet) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.adress==null && other.getAdress()==null) || 
             (this.adress!=null &&
              this.adress.equals(other.getAdress()))) &&
            ((this.dataSource==null && other.getDataSource()==null) || 
             (this.dataSource!=null &&
              this.dataSource.equals(other.getDataSource()))) &&
            ((this.description==null && other.getDescription()==null) || 
             (this.description!=null &&
              this.description.equals(other.getDescription()))) &&
            this.dsId == other.getDsId() &&
            ((this.executorClass==null && other.getExecutorClass()==null) || 
             (this.executorClass!=null &&
              this.executorClass.equals(other.getExecutorClass()))) &&
            ((this.fileName==null && other.getFileName()==null) || 
             (this.fileName!=null &&
              this.fileName.equals(other.getFileName()))) &&
            ((this.javaClassName==null && other.getJavaClassName()==null) || 
             (this.javaClassName!=null &&
              this.javaClassName.equals(other.getJavaClassName()))) &&
            ((this.label==null && other.getLabel()==null) || 
             (this.label!=null &&
              this.label.equals(other.getLabel()))) &&
            ((this.name==null && other.getName()==null) || 
             (this.name!=null &&
              this.name.equals(other.getName()))) &&
            ((this.operation==null && other.getOperation()==null) || 
             (this.operation!=null &&
              this.operation.equals(other.getOperation()))) &&
            ((this.parameters==null && other.getParameters()==null) || 
             (this.parameters!=null &&
              this.parameters.equals(other.getParameters()))) &&
            ((this.query==null && other.getQuery()==null) || 
             (this.query!=null &&
              this.query.equals(other.getQuery()))) &&
            ((this.script==null && other.getScript()==null) || 
             (this.script!=null &&
              this.script.equals(other.getScript()))) &&
            ((this.type==null && other.getType()==null) || 
             (this.type!=null &&
              this.type.equals(other.getType())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getAdress() != null) {
            _hashCode += getAdress().hashCode();
        }
        if (getDataSource() != null) {
            _hashCode += getDataSource().hashCode();
        }
        if (getDescription() != null) {
            _hashCode += getDescription().hashCode();
        }
        _hashCode += getDsId();
        if (getExecutorClass() != null) {
            _hashCode += getExecutorClass().hashCode();
        }
        if (getFileName() != null) {
            _hashCode += getFileName().hashCode();
        }
        if (getJavaClassName() != null) {
            _hashCode += getJavaClassName().hashCode();
        }
        if (getLabel() != null) {
            _hashCode += getLabel().hashCode();
        }
        if (getName() != null) {
            _hashCode += getName().hashCode();
        }
        if (getOperation() != null) {
            _hashCode += getOperation().hashCode();
        }
        if (getParameters() != null) {
            _hashCode += getParameters().hashCode();
        }
        if (getQuery() != null) {
            _hashCode += getQuery().hashCode();
        }
        if (getScript() != null) {
            _hashCode += getScript().hashCode();
        }
        if (getType() != null) {
            _hashCode += getType().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SpagoBiDataSet.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://bo.dataset.services.spagobi.eng.it", "SpagoBiDataSet"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("adress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "adress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dataSource");
        elemField.setXmlName(new javax.xml.namespace.QName("", "dataSource"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://bo.datasource.services.spagobi.eng.it", "SpagoBiDataSource"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("description");
        elemField.setXmlName(new javax.xml.namespace.QName("", "description"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dsId");
        elemField.setXmlName(new javax.xml.namespace.QName("", "dsId"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("executorClass");
        elemField.setXmlName(new javax.xml.namespace.QName("", "executorClass"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("fileName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "fileName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("javaClassName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "javaClassName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("label");
        elemField.setXmlName(new javax.xml.namespace.QName("", "label"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("name");
        elemField.setXmlName(new javax.xml.namespace.QName("", "name"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("operation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "operation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("parameters");
        elemField.setXmlName(new javax.xml.namespace.QName("", "parameters"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("query");
        elemField.setXmlName(new javax.xml.namespace.QName("", "query"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("script");
        elemField.setXmlName(new javax.xml.namespace.QName("", "script"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("type");
        elemField.setXmlName(new javax.xml.namespace.QName("", "type"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
