/**
 * SpagoBiDataSource.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.3 Oct 05, 2005 (05:23:37 EDT) WSDL2Java emitter.
 */

package it.eng.spagobi.services.datasource.bo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class SpagoBiDataSource  implements java.io.Serializable {
    private java.lang.String driver;

    private java.lang.String jndiName;

    private java.lang.String password;

    private java.lang.String url;

    private java.lang.String user;

    private java.lang.String label;

    private java.lang.String hibDialectClass;

    private java.lang.String hibDialectName;

    public SpagoBiDataSource() {
    }

    public SpagoBiDataSource(
           java.lang.String driver,
           java.lang.String jndiName,
           java.lang.String password,
           java.lang.String url,
           java.lang.String user,
           java.lang.String label,
           java.lang.String hibDialectClass,
           java.lang.String hibDialectName) {
           this.driver = driver;
           this.jndiName = jndiName;
           this.password = password;
           this.url = url;
           this.user = user;
           this.label = label;
           this.hibDialectClass = hibDialectClass;
           this.hibDialectName = hibDialectName;
    }


    public boolean isJndi() {
    	return getJndiName() != null 
    			&& getJndiName().equals("") == false;
    }
    
    public Connection getConnection() throws NamingException, SQLException, ClassNotFoundException {
    	Connection connection = null;
    	 
    	if( isJndi() ) {
    		connection = getJndiConnection();
    	} else {    		
    		connection = getDirectConnection();
    	}
    	
    	return connection;
    }
    
    
    /**
     * Get the connection from JNDI
     * 
     * @param connectionConfig
     *                SourceBean describing data connection
     * @return Connection to database
     * @throws NamingException 
     * @throws SQLException 
     */
    private Connection getJndiConnection() throws NamingException, SQLException {
		Connection connection = null;
		
		Context ctx;
		ctx = new InitialContext();
		DataSource ds = (DataSource) ctx.lookup( getJndiName() );
		connection = ds.getConnection();
		
		return connection;
    }

    /**
     * Get the connection using jdbc
     * 
     * @param connectionConfig
     *                SpagoBiDataSource describing data connection
     * @return Connection to database
     * @throws ClassNotFoundException 
     * @throws SQLException 
     */
    private Connection getDirectConnection() throws ClassNotFoundException, SQLException {
		Connection connection = null;
		
		Class.forName( getDriver() );
		connection = DriverManager.getConnection(getUrl(), getUser(), getPassword());
		
		return connection;
    }
    
    
    
    
    /**
     * Gets the driver value for this SpagoBiDataSource.
     * 
     * @return driver
     */
    public java.lang.String getDriver() {
        return driver;
    }


    /**
     * Sets the driver value for this SpagoBiDataSource.
     * 
     * @param driver
     */
    public void setDriver(java.lang.String driver) {
        this.driver = driver;
    }


    /**
     * Gets the jndiName value for this SpagoBiDataSource.
     * 
     * @return jndiName
     */
    public java.lang.String getJndiName() {
        return jndiName;
    }


    /**
     * Sets the jndiName value for this SpagoBiDataSource.
     * 
     * @param jndiName
     */
    public void setJndiName(java.lang.String jndiName) {
        this.jndiName = jndiName;
    }


    /**
     * Gets the password value for this SpagoBiDataSource.
     * 
     * @return password
     */
    public java.lang.String getPassword() {
        return password;
    }


    /**
     * Sets the password value for this SpagoBiDataSource.
     * 
     * @param password
     */
    public void setPassword(java.lang.String password) {
        this.password = password;
    }


    /**
     * Gets the url value for this SpagoBiDataSource.
     * 
     * @return url
     */
    public java.lang.String getUrl() {
        return url;
    }


    /**
     * Sets the url value for this SpagoBiDataSource.
     * 
     * @param url
     */
    public void setUrl(java.lang.String url) {
        this.url = url;
    }


    /**
     * Gets the user value for this SpagoBiDataSource.
     * 
     * @return user
     */
    public java.lang.String getUser() {
        return user;
    }


    /**
     * Sets the user value for this SpagoBiDataSource.
     * 
     * @param user
     */
    public void setUser(java.lang.String user) {
        this.user = user;
    }


    /**
     * Gets the label value for this SpagoBiDataSource.
     * 
     * @return label
     */
    public java.lang.String getLabel() {
        return label;
    }


    /**
     * Sets the label value for this SpagoBiDataSource.
     * 
     * @param label
     */
    public void setLabel(java.lang.String label) {
        this.label = label;
    }


    /**
     * Gets the hibDialectClass value for this SpagoBiDataSource.
     * 
     * @return hibDialectClass
     */
    public java.lang.String getHibDialectClass() {
        return hibDialectClass;
    }


    /**
     * Sets the hibDialectClass value for this SpagoBiDataSource.
     * 
     * @param hibDialectClass
     */
    public void setHibDialectClass(java.lang.String hibDialectClass) {
        this.hibDialectClass = hibDialectClass;
    }


    /**
     * Gets the hibDialectName value for this SpagoBiDataSource.
     * 
     * @return hibDialectName
     */
    public java.lang.String getHibDialectName() {
        return hibDialectName;
    }


    /**
     * Sets the hibDialectName value for this SpagoBiDataSource.
     * 
     * @param hibDialectName
     */
    public void setHibDialectName(java.lang.String hibDialectName) {
        this.hibDialectName = hibDialectName;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SpagoBiDataSource)) return false;
        SpagoBiDataSource other = (SpagoBiDataSource) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.driver==null && other.getDriver()==null) || 
             (this.driver!=null &&
              this.driver.equals(other.getDriver()))) &&
            ((this.jndiName==null && other.getJndiName()==null) || 
             (this.jndiName!=null &&
              this.jndiName.equals(other.getJndiName()))) &&
            ((this.password==null && other.getPassword()==null) || 
             (this.password!=null &&
              this.password.equals(other.getPassword()))) &&
            ((this.url==null && other.getUrl()==null) || 
             (this.url!=null &&
              this.url.equals(other.getUrl()))) &&
            ((this.user==null && other.getUser()==null) || 
             (this.user!=null &&
              this.user.equals(other.getUser()))) &&
            ((this.label==null && other.getLabel()==null) || 
             (this.label!=null &&
              this.label.equals(other.getLabel()))) &&
            ((this.hibDialectClass==null && other.getHibDialectClass()==null) || 
             (this.hibDialectClass!=null &&
              this.hibDialectClass.equals(other.getHibDialectClass()))) &&
            ((this.hibDialectName==null && other.getHibDialectName()==null) || 
             (this.hibDialectName!=null &&
              this.hibDialectName.equals(other.getHibDialectName())));
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
        if (getDriver() != null) {
            _hashCode += getDriver().hashCode();
        }
        if (getJndiName() != null) {
            _hashCode += getJndiName().hashCode();
        }
        if (getPassword() != null) {
            _hashCode += getPassword().hashCode();
        }
        if (getUrl() != null) {
            _hashCode += getUrl().hashCode();
        }
        if (getUser() != null) {
            _hashCode += getUser().hashCode();
        }
        if (getLabel() != null) {
            _hashCode += getLabel().hashCode();
        }
        if (getHibDialectClass() != null) {
            _hashCode += getHibDialectClass().hashCode();
        }
        if (getHibDialectName() != null) {
            _hashCode += getHibDialectName().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SpagoBiDataSource.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://bo.datasource.services.spagobi.eng.it", "SpagoBiDataSource"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("driver");
        elemField.setXmlName(new javax.xml.namespace.QName("", "driver"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("jndiName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "jndiName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("password");
        elemField.setXmlName(new javax.xml.namespace.QName("", "password"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("url");
        elemField.setXmlName(new javax.xml.namespace.QName("", "url"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("user");
        elemField.setXmlName(new javax.xml.namespace.QName("", "user"));
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
        elemField.setFieldName("hibDialectClass");
        elemField.setXmlName(new javax.xml.namespace.QName("", "hibDialectClass"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.xmlsoap.org/soap/encoding/", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("hibDialectName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "hibDialectName"));
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
