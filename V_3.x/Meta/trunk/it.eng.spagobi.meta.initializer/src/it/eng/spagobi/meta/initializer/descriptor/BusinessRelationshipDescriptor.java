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

/**
*  Utility Class used by the UI for creating BusinessRelationship
*/
package it.eng.spagobi.meta.initializer.descriptor;

import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessColumnSet;


public class BusinessRelationshipDescriptor {
	
	private String relationshipName;
	private BusinessColumnSet sourceTable, destinationTable;
	private java.util.List<BusinessColumn> sourceColumns, destinationColumns;
	private int relationCardinality;
	
	
	public BusinessRelationshipDescriptor(BusinessColumnSet source, BusinessColumnSet destination, java.util.List<BusinessColumn> sourceCol, java.util.List<BusinessColumn> destinationCol, int cardinality, String relationshipName){
		sourceTable = source;
		destinationTable = destination;
		sourceColumns = sourceCol;
		destinationColumns = destinationCol;
		relationCardinality = cardinality;
		this.relationshipName = relationshipName;
	}

	/**
	 * @param sourceTable the sourceTable to set
	 */
	public void setSourceTable(BusinessColumnSet sourceTable) {
		this.sourceTable = sourceTable;
	}

	/**
	 * @return the sourceTable
	 */
	public BusinessColumnSet getSourceTable() {
		return sourceTable;
	}

	/**
	 * @param destinationTable the destinationTable to set
	 */
	public void setDestinationTable(BusinessColumnSet destinationTable) {
		this.destinationTable = destinationTable;
	}

	/**
	 * @return the destinationTable
	 */
	public BusinessColumnSet getDestinationTable() {
		return destinationTable;
	}

	/**
	 * @param sourceColumns the sourceColumns to set
	 */
	public void setSourceColumns(java.util.List<BusinessColumn> sourceColumns) {
		this.sourceColumns = sourceColumns;
	}

	/**
	 * @return the sourceColumns
	 */
	public java.util.List<BusinessColumn> getSourceColumns() {
		return sourceColumns;
	}

	/**
	 * @param destinationColumns the destinationColumns to set
	 */
	public void setDestinationColumns(java.util.List<BusinessColumn> destinationColumns) {
		this.destinationColumns = destinationColumns;
	}

	/**
	 * @return the destinationColumns
	 */
	public java.util.List<BusinessColumn> getDestinationColumns() {
		return destinationColumns;
	}

	/**
	 * @param relationCardinality the relationCardinality to set
	 */
	public void setRelationCardinality(int relationCardinality) {
		this.relationCardinality = relationCardinality;
	}

	/**
	 * @return the relationCardinality
	 */
	public int getRelationCardinality() {
		return relationCardinality;
	}

	/**
	 * @param relationshipName the relationshipName to set
	 */
	public void setRelationshipName(String relationshipName) {
		this.relationshipName = relationshipName;
	}

	/**
	 * @return the relationshipName
	 */
	public String getRelationshipName() {
		return relationshipName;
	}
	
}