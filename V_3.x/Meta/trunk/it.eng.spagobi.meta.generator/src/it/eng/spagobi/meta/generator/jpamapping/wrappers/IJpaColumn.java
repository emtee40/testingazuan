package it.eng.spagobi.meta.generator.jpamapping.wrappers;

public interface IJpaColumn {

	public static final String PUBLIC_SCOPE = "public"; //$NON-NLS-1$
	public static final String PROTECTED_SCOPE = "protected"; //$NON-NLS-1$
	public static final String PRIVATE_SCOPE = "private"; //$NON-NLS-1$

	/**
	 * 
	 * @return the parent table
	 */
	IJpaTable getJpaTable();
	
	String getName();
	
	String getDescription();
	
	/**
	 * 
	 * @return the phisical column name 
	 */
	String getSqlName();
	
	String getUniqueName();

	/**
	 * 
	 * @return the phisical column name  sourounded with double quote
	 */
	public abstract String getColumnNameDoubleQuoted();
	
	/**
	 * 
	 * @return true if the column is part of the primary key
	 */
	boolean isIdentifier();

	/**
	 * 
	 * @return true if the identifier is composite and we are writing the class identifier property
	 */
	boolean isPKReadOnly();

	/**
	 * 
	 * @return true if this Column belong to any relationship
	 */
	boolean isColumnInRelationship();

	/**
	 * 
	 * @return the generated bean property name for the given column (It does not return null)
	 */
	String getPropertyName();

	/**
	 * 
	 * @return the generated bean property name for the given column (It does not return null)
	 */
	String getSimplePropertyType();

	/**
	 * 
	 * @return the column type as java object (It does not return null)
	 */
	String getPropertyType();

	/**
	 *
	 * @return the name of the 'get' method
	 */
	public abstract String getPropertyNameGetter();

	/**
	 *
	 * @return the name of the 'set' method
	 */
	public abstract String getPropertyNameSetter();
	
	/**
	 * @return the value of the specified column attribute
	 */
	public String getAttribute(String name);
	
	
	/**
	 * @TODO da verificare 
	 */
	boolean isDataTypeLOB();

	boolean needMapTemporalType();

	String getMapTemporalType();

	String getUnqualifiedUniqueName();
	
}