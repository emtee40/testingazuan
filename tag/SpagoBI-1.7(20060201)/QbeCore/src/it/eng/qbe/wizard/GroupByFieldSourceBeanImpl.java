/*
 * Created on 4-feb-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.qbe.wizard;


/**
 * @author Zoppello
 *
 * TODO To change the template for this generated type comment go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
public class GroupByFieldSourceBeanImpl  implements IOrderGroupByField{

	private String id = null;
	
	private String fieldName = null;

	public GroupByFieldSourceBeanImpl(){
		
		this.id = "groupby"+ String.valueOf(System.currentTimeMillis());
	
	}
	
	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	
	
	
	
	
	
}


	

	
	
	

