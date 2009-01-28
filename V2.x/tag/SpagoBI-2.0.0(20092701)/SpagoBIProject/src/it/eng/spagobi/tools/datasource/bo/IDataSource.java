package it.eng.spagobi.tools.datasource.bo;

import it.eng.spagobi.services.datasource.bo.SpagoBiDataSource;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Set;

import javax.naming.NamingException;

public interface IDataSource {

	public abstract SpagoBiDataSource toSpagoBiDataSource();

	
	public boolean checkIsJndi();
	
    /**
     * Gets the connection.
     * 
     * @return the connection
     * 
     * @throws NamingException the naming exception
     * @throws SQLException the SQL exception
     * @throws ClassNotFoundException the class not found exception
     */
    public Connection getConnection() throws NamingException, SQLException, ClassNotFoundException ;
    
    
	/**
	 * Gets the ds id.
	 * 
	 * @return the ds id
	 */
	public abstract int getDsId();

	/**
	 * Sets the ds id.
	 * 
	 * @param dsId the new ds id
	 */
	public abstract void setDsId(int dsId);

	/**
	 * Gets the descr.
	 * 
	 * @return the descr
	 */
	public abstract String getDescr();

	/**
	 * Sets the descr.
	 * 
	 * @param descr the new descr
	 */
	public abstract void setDescr(String descr);

	/**
	 * Gets the label.
	 * 
	 * @return the label
	 */
	public abstract String getLabel();

	/**
	 * Sets the label.
	 * 
	 * @param label the new label
	 */
	public abstract void setLabel(String label);

	/**
	 * Gets the jndi.
	 * 
	 * @return the jndi
	 */
	public abstract String getJndi();

	/**
	 * Sets the jndi.
	 * 
	 * @param jndi the new jndi
	 */
	public abstract void setJndi(String jndi);

	/**
	 * Gets the url connection.
	 * 
	 * @return the url connection
	 */
	public abstract String getUrlConnection();

	/**
	 * Sets the url connection.
	 * 
	 * @param url_connection the new url connection
	 */
	public abstract void setUrlConnection(String url_connection);

	/**
	 * Gets the user.
	 * 
	 * @return the user
	 */
	public abstract String getUser();

	/**
	 * Sets the user.
	 * 
	 * @param user the new user
	 */
	public abstract void setUser(String user);

	/**
	 * Gets the pwd.
	 * 
	 * @return the pwd
	 */
	public abstract String getPwd();

	/**
	 * Sets the pwd.
	 * 
	 * @param pwd the new pwd
	 */
	public abstract void setPwd(String pwd);

	/**
	 * Gets the driver.
	 * 
	 * @return the driver
	 */
	public abstract String getDriver();

	/**
	 * Sets the driver.
	 * 
	 * @param driver the new driver
	 */
	public abstract void setDriver(String driver);

	/**
	 * Gets the dialect id.
	 * 
	 * @return the dialect id
	 */
	public abstract Integer getDialectId();

	/**
	 * Sets the dialect id.
	 * 
	 * @param dialectId the new dialect id
	 */
	public abstract void setDialectId(Integer dialectId);

	/**
	 * Gets the engines.
	 * 
	 * @return the engines
	 */
	public abstract Set getEngines();

	/**
	 * Sets the engines.
	 * 
	 * @param engines the new engines
	 */
	public abstract void setEngines(Set engines);

	/**
	 * Gets the objects.
	 * 
	 * @return the objects
	 */
	public abstract Set getObjects();

	/**
	 * Sets the objects.
	 * 
	 * @param objects the new objects
	 */
	public abstract void setObjects(Set objects);
	
	public String getHibDialectClass() ;

	public void setHibDialectClass(String hibDialectClass);

	public String getHibDialectName() ;

	public void setHibDialectName(String hibDialectName);

}