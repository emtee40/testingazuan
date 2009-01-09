/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.tools.dataset.common.transformer;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;

import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spagobi.tools.dataset.common.datastore.DataStore;
import it.eng.spagobi.tools.dataset.common.datastore.Field;
import it.eng.spagobi.tools.dataset.common.datastore.FieldMetadata;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStoreMetaData;
import it.eng.spagobi.tools.dataset.common.datastore.IField;
import it.eng.spagobi.tools.dataset.common.datastore.IFieldMetaData;
import it.eng.spagobi.tools.dataset.common.datastore.IRecord;
import it.eng.spagobi.tools.dataset.common.datastore.Record;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 * 
 */
public class PivotDataSetTransformer extends AbstractDataStoreTransformer {

	String pivotFieldName; // pivotColumn
	String valueFieldName; // pivotValue
	String groupFieldName; // pivotRow
	
	List pivotedFieldNames;

	private static transient Logger logger = Logger
			.getLogger(PivotDataSetTransformer.class);

	/*
	 * Prerequisites: the pivotDataSetTransform needs in input a datastore with the next structure:
	 * - X that identifies the row on which the values are aggregated(ie. the month)
	 * - SER that identifies the column that will pivotted (ie. SER1, SER2, SER3, SER4,..)
	 * - VAL that identifies the column with the real values of the series
	 * - xxx other fields that are not used in the operations of pivot
	 * 
	 * ie:
	 *  X                      SER           VAL         IDX   ....
	Gennaio            SER1           33            1
	Gennaio            SER2           12            1
	Gennaio            SER3           64            1
	Gennaio            SER4           21            1
	Febbraio           SER1           56            2
	Febbraio           SER2           35            2
	Febbraio           SER3           13            2
	Febbraio           SER4           75            2
	 */
	public PivotDataSetTransformer(String pivotFieldName,
			String valueFieldName, String groupFieldName) {
		this.setPivotFieldName(pivotFieldName);
		this.setValueFieldName(valueFieldName);
		this.setGroupFieldName(groupFieldName);
		pivotedFieldNames = new ArrayList();
	}

	
	void transformDataSetMetaData(IDataStore dataStore) {
		IDataStoreMetaData dataStoreMeta;
		int pivotFieldIndex;
		int valueFieldIndex;
		
		dataStoreMeta = dataStore.getMetaData();
		
		pivotFieldIndex = dataStoreMeta.getFieldIndex(getPivotFieldName());
		valueFieldIndex = dataStoreMeta.getFieldIndex(getValueFieldName());
		
		Class pivotedFieldType = dataStoreMeta.getFieldMeta( valueFieldIndex ).getType();
		
		dataStoreMeta = dataStore.getMetaData();
		dataStoreMeta.deleteFieldMetaDataAt( pivotFieldIndex );
		dataStoreMeta.deleteFieldMetaDataAt( valueFieldIndex-1 );
		
		for(int i = 0; i < pivotedFieldNames.size(); i++) {
			IFieldMetaData fieldMeta;			
			fieldMeta = new FieldMetadata((String)pivotedFieldNames.get(i), pivotedFieldType);			
			dataStoreMeta.addFiedMeta( fieldMeta );
		}
	}

	void transformDataSetRecords(IDataStore dataStore) {
		IDataStoreMetaData dataStoreMeta;
		int pivotFieldIndex;
		int valueFieldIndex;
		int groupFieldIndex;

		List newRecords = new ArrayList();
		IRecord newRecord = null;
		Object selectedGroupValue = null;

		dataStoreMeta = dataStore.getMetaData();
		pivotFieldIndex = dataStoreMeta.getFieldIndex(getPivotFieldName());
		valueFieldIndex = dataStoreMeta.getFieldIndex(getValueFieldName());
		groupFieldIndex = dataStoreMeta.getFieldIndex(getGroupFieldName());

		Iterator pivotedFieldNamesIterator = dataStore.getFieldDistinctValues(pivotFieldIndex).iterator();		
		while ( pivotedFieldNamesIterator.hasNext() ) {
			pivotedFieldNames.add( pivotedFieldNamesIterator.next() );
		}

		Iterator it = dataStore.iterator();
		while (it.hasNext()) {
			IRecord record = (IRecord) it.next();

			IField pivotField = record.getFieldAt(pivotFieldIndex);
			IField valueField = record.getFieldAt(valueFieldIndex);
			IField groupField = record.getFieldAt(groupFieldIndex);

			if(selectedGroupValue == null || !selectedGroupValue.equals( groupField.getValue() )) {
				selectedGroupValue = groupField.getValue();
				if(newRecord != null) {
					newRecord.getFields().remove(pivotFieldIndex);
					newRecord.getFields().remove(valueFieldIndex-1);
					newRecords.add( newRecord );
				}
				newRecord = record;
								
				for (int i = 0; i < pivotedFieldNames.size(); i++) {					
					newRecord.appendField(new Field(null));
				}
				
				
			}
			
			int pivotedFieldIndex = dataStoreMeta.getFieldCount() + pivotedFieldNames.indexOf( pivotField.getValue() );
			newRecord.getFieldAt( pivotedFieldIndex ).setValue( valueField.getValue() );
		}
		
		newRecord.getFields().remove(pivotFieldIndex);
		newRecord.getFields().remove(valueFieldIndex);
		newRecords.add( newRecord );
		
		((DataStore) dataStore).setRecords(newRecords);
	}

	public String getPivotFieldName() {
		return pivotFieldName;
	}

	public void setPivotFieldName(String pivotFieldName) {
		this.pivotFieldName = pivotFieldName;
	}

	public String getValueFieldName() {
		return valueFieldName;
	}

	public void setValueFieldName(String valueFieldName) {
		this.valueFieldName = valueFieldName;
	}

	public String getGroupFieldName() {
		return groupFieldName;
	}

	public void setGroupFieldName(String groupFieldName) {
		this.groupFieldName = groupFieldName;
	}
	
	
	/**
	 X                      SER           VAL         IDX   ....
Gennaio            SER1           33            1
Gennaio            SER2           12            1
Gennaio            SER3           64            1
Gennaio            SER4           21            1
Febbraio           SER1           56            2
Febbraio           SER2           35            2
Febbraio           SER3           13            2
Febbraio           SER4           75            2
	 */
	public static void main(String[] args) {
		IDataStore dataStore;
		IRecord record;
		
		dataStore = new DataStore();
		
		dataStore.getMetaData().addFiedMeta(new FieldMetadata("X", String.class ));
		dataStore.getMetaData().addFiedMeta(new FieldMetadata("SER", String.class));
		dataStore.getMetaData().addFiedMeta(new FieldMetadata("VAL", Double.class));
		dataStore.getMetaData().addFiedMeta(new FieldMetadata("IDX", Integer.class));
		
		// ----------------------------------------------------
		
		record = new Record();
		record.appendField(new Field("Gennaio"));
		record.appendField(new Field("SER1"));
		record.appendField(new Field(new Double(33)));
		record.appendField(new Field(new Integer(1)));
		dataStore.appendRecord(record);
		
		record = new Record();
		record.appendField(new Field("Gennaio"));
		record.appendField(new Field("SER2"));
		record.appendField(new Field(new Field(new Double(12))));
		record.appendField(new Field(new Integer(1)));
		dataStore.appendRecord(record);
		
		record = new Record();
		record.appendField(new Field("Gennaio"));
		record.appendField(new Field("SER3"));
		record.appendField(new Field(new Field(new Double(64))));
		record.appendField(new Field(new Integer(1)));
		dataStore.appendRecord(record);
		
		record = new Record();
		record.appendField(new Field("Gennaio"));
		record.appendField(new Field("SER4"));
		record.appendField(new Field(new Field(new Double(21))));
		record.appendField(new Field(new Integer(1)));
		dataStore.appendRecord(record);
		
		// ----------------------------------------------------
		
		record = new Record();
		record.appendField(new Field("Febbraio"));
		record.appendField(new Field("SER1"));
		record.appendField(new Field("56"));
		record.appendField(new Field(new Integer(2)));
		dataStore.appendRecord(record);
		
		record = new Record();
		record.appendField(new Field("Febbraio"));
		record.appendField(new Field("SER2"));
		record.appendField(new Field(new Field(new Double(35))));
		record.appendField(new Field(new Integer(2)));
		dataStore.appendRecord(record);
		
		record = new Record();
		record.appendField(new Field("Febbraio"));
		record.appendField(new Field("SER3"));
		record.appendField(new Field(new Field(new Double(13))));
		record.appendField(new Field(new Integer(2)));
		dataStore.appendRecord(record);
		
		record = new Record();
		record.appendField(new Field("Febbraio"));
		record.appendField(new Field("SER4"));
		record.appendField(new Field(new Field(new Double(75))));
		record.appendField(new Field(new Integer(2)));
		dataStore.appendRecord(record);
		
		IDataStoreTransformer transformer = new PivotDataSetTransformer("SER", "VAL", "X");
		transformer.transform(dataStore);
		System.out.println(dataStore.toXml());
	}

}
