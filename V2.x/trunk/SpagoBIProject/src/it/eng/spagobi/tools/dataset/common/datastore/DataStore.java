/**
 * 
 */
package it.eng.spagobi.tools.dataset.common.datastore;

import it.eng.spago.base.SourceBeanAttribute;
import it.eng.spagobi.tools.dataset.common.transformer.IDataTransformer;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;

/**
 * @authors Angelo Bernabei (angelo.bernabei@eng.it)       
 *          Andrea Gioia (andrea.gioia@eng.it)
 */
public class DataStore implements IDataStore {
	
	IDataStoreMetaData metaData;
	
	List records = null;
	
	
	private static transient Logger logger = Logger.getLogger(DataStore.class);
	


    public DataStore() {
		super();
		this.records = new ArrayList();
		this.metaData = new DataStoreMetaData();
	}
    
    public boolean isEmpty(){
    	return records.isEmpty();
    }
    
    public Iterator iterator() {
    	return records.iterator();
    }

    public void appendRecord(IRecord record) {		
		records.add( record );		
	}
    
    public void prependRecord(IRecord record) {		
    	insertRecord( 0, record );		
	}
	
	public void insertRecord(int position,IRecord record) {		
		records.add(position, record);		
	}
	
    public IRecord getRecordAt(int i) {    	
    	return (IRecord)records.get(i);	
    }

    public IRecord getRecordByID(Object value) { 
    	List result;
    	final int idFieldIndex;
    	
    	idFieldIndex = getMetaData().getIdFieldIndex();
    	if(idFieldIndex == -1) {
    		throw new RuntimeException("Impossible to get a record by id if the id filed has not been specified before into the DataStoreMetaData object");
    	}

    	result = findRecords(idFieldIndex, value);
    	
    	if(result.size() > 1) {
    		logger.warn("Duplicate idetifier found while searching record by id on value ["  + value + "]. Only the first match will be used");
    	}
    	
    	return result.size() == 1? (IRecord)result.get(0): null;
    }
    
    public List findRecords(int fieldIndex, Object fieldValue) {
    	List fieldIndexes = new ArrayList();
    	List fieldValues = new ArrayList();
    	
    	fieldIndexes.add( new Integer(fieldIndex) );
    	fieldValues.add( fieldValue );
    	
    	return findRecords(fieldIndexes, fieldValues);
    }
    
    public List findRecords(final List fieldIndexes, final List fieldValues) {
    	List results;    	
    	
    	results = new ArrayList();    	
    	
    	results = findRecords(new IRecordMatcher(){
    		public boolean match(IRecord record) {
    			boolean match = true;
    			for(int i = 0; i < fieldIndexes.size(); i++){
    	    		Integer fieldIndex = (Integer)fieldIndexes.get(i);
    	    		Object fieldValue = fieldValues.get(i);
    	    		IField filed = record.getFieldAt( fieldIndex.intValue() );
    	    		if( !filed.getValue().equals( fieldValue ) ) {
    	    			match = false;
    	    			break;
    	    		}
    	    	}
    			return match;
    		}
    	});    	
    	
    	return results;
    }
    
    public List findRecords(IRecordMatcher matcher) {
    	List results;
    	Iterator it;
    	
    	results = new ArrayList();
    	
    	it = iterator();
    	while(it.hasNext()) {
    		IRecord record = (IRecord)it.next();
    		if(matcher.match(record)) {
    			results.add(record);
    		}
    	}
    	
    	return results;
    }

    
    public IDataStoreMetaData getMetaData() {
    	return this.metaData;
    }
    
    public void setMetaData(IDataStoreMetaData metaData) {
		this.metaData = metaData;
	}


    public List getFieldValues(int fieldIndex) {
    	List results;
    	Iterator it;
    	
    	results = new ArrayList();
    	
    	it = iterator();
    	while( it.hasNext() ) {
    		IRecord record = (IRecord)it.next();
    		IField field = record.getFieldAt(fieldIndex);
    		if(field.getValue() != null) {
    			results.add(field.getValue());
    		}
    	}
    	
    	return results;
    }
    
    
    public Set getFieldDistinctValues(int fieldIndex) {
    	Set results;
    	Iterator it;
    	
    	results = new HashSet();
    	
    	it = iterator();
    	while( it.hasNext() ) {
    		IRecord record = (IRecord)it.next();
    		IField field = record.getFieldAt(fieldIndex);
    		if(field.getValue() != null) {
    			results.add(field.getValue());
    		}
    	}
    	
    	return results;
    }
    
   public void sortRecords(int fieldIndex) {
    	final int fIndex = fieldIndex;
    	
    	/*
    	Class fieldType = getMetaData().getFieldType(fieldIndex);
    	if(!fieldType.isInstance(Comparable.class)) {
    		throw new RuntimeException("Impossible to sort DataStore on field " + fieldIndex 
    				+ "because the type of this filed [" + fieldType.getName() + "] does not implement the Comparable interface");
    	}
    	*/
    	
    	sortRecords(new Comparator() {
    		public int compare(Object o1, Object o2) {
    			IRecord record1 = (IRecord)o1;
    			IRecord record2 = (IRecord)o2;
    			IField field1 = record1.getFieldAt(fIndex);
    			IField field2 = record2.getFieldAt(fIndex);
    			Comparable value1 = (Comparable)field1.getValue();
    			Comparable value2 = (Comparable)field2.getValue();
    			
    			if(value1 == null && value2 == null) return 0;
    			else if(value1 == null) return -1;
    			else if(value2 == null) return 1;
    			
    			return value1.compareTo(value2);
    		}    		 
    	});
    }
    
    public void sortRecords(int fieldIndex, Comparator filedComparator) {
    	final int fIndex = fieldIndex;
    	final Comparator fComaparator = filedComparator;
    	sortRecords(new Comparator() {
    		public int compare(Object o1, Object o2) {
    			IRecord record1 = (IRecord)o1;
    			IRecord record2 = (IRecord)o2;
    			IField field1 = record1.getFieldAt(fIndex);
    			IField field2 = record2.getFieldAt(fIndex);
    			return fComaparator.compare(field1, field2);
    		}    		 
    	});
    }
    
    public void sortRecords(Comparator recordComparator) {
    	Collections.sort(records, recordComparator);
    }
    
    
	public List getRecords() {
		return records;
	}

	public void setRecords(List records) {
		this.records = records;
	}
    
    
    
    
    
    
    
    


	


    public String toXml() {
    	String xml;
    	
    	logger.debug("IN");    	
    	
    	xml = "<ROWS>";
		Iterator it = iterator();
		while (it.hasNext()){
			IRecord record =(IRecord) it.next();	
			xml += "<ROW ";			
			for(int j = 0; j < getMetaData().getFieldCount(); j++){
				IField field = record.getFieldAt(j);
				xml += getMetaData().getFieldName(j) +"=\'" + field.getValue() + "\' ";
			}			
			xml += " />";
			
		}
		xml += "</ROWS>";

		logger.debug("OUT");
		
		return xml;
    }


}
