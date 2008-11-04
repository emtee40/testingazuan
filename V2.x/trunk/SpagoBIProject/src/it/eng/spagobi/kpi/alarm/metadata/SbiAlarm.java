package it.eng.spagobi.kpi.alarm.metadata;

/**
 * Title: SpagoBI
 * Description: SpagoBI
 * Copyright: Copyright (c) 2008
 * Company: Xaltia S.p.A.
 * 
 * @author Enrico Cesaretti
 * @version 1.0
 */

 

import java.util.HashSet;
import java.util.Set;

public class SbiAlarm  implements java.io.Serializable {

 	/**
     * 
     */
    private static final long serialVersionUID = 4950020055410842408L;
	private Integer id; 
 	private boolean singleEvent;
 	private boolean autoDisabled;
 	private String label; 
 	private String name; 
 	private String descr; 
 	private String text; 
 	private String url; 
 	private Set<SbiAlarmContact> sbiAlarmContacts = new HashSet<SbiAlarmContact>(0); 


    public SbiAlarm() {}
	

    public SbiAlarm(Boolean singleEvent, Boolean autoDisabled, String label, String name, String descr, String text, String url, Set<SbiAlarmContact> sbiAlarmContacts) {
       this.singleEvent = singleEvent;
       this.autoDisabled = autoDisabled;
       this.label = label;
       this.name = name;
       this.descr = descr;
       this.text = text;
       this.url = url;
       this.sbiAlarmContacts = sbiAlarmContacts;
    }

   
    public Integer getId() {
        return this.id;
    }    
    
    public void setId(Integer id) {
        this.id = id;
    }    
    public boolean isSingleEvent() {
        return this.singleEvent;
    }    
    
    public void setSingleEvent(boolean singleEvent) {
        this.singleEvent = singleEvent;
    }
    public boolean isAutoDisabled() {
        return this.autoDisabled;
    }    
    
    public void setAutoDisabled(boolean autoDisabled) {
        this.autoDisabled = autoDisabled;
    }
    public String getLabel() {
        return this.label;
    }    
    
    public void setLabel(String label) {
        this.label = label;
    }    
    public String getName() {
        return this.name;
    }    
    
    public void setName(String name) {
        this.name = name;
    }    
    public String getDescr() {
        return this.descr;
    }    
    
    public void setDescr(String descr) {
        this.descr = descr;
    }    
    public String getText() {
        return this.text;
    }    
    
    public void setText(String text) {
        this.text = text;
    }    
    public String getUrl() {
        return this.url;
    }    
    
    public void setUrl(String url) {
        this.url = url;
    }    
    public Set<SbiAlarmContact> getSbiAlarmContacts() {
        return this.sbiAlarmContacts;
    }    
    
    public void setSbiAlarmContacts(Set<SbiAlarmContact> sbiAlarmContacts) {
        this.sbiAlarmContacts = sbiAlarmContacts;
    }    

	/**
	 * Constructs a <code>String</code> with all attributes
	 * in name = value format.
	 *
	 * @return a <code>String</code> representation 
	 * of this object.
	 */
	public String toString(){
	    final String TAB = ", ";
	    StringBuffer retValue = new StringBuffer();
	    retValue.append("SbiAlarm ( ")
	        .append(super.toString()).append(TAB)
			.append("id = ").append(this.id).append(TAB)			
			.append("singleEvent = ").append(this.singleEvent).append(TAB)			
			.append("autoDisabled = ").append(this.autoDisabled).append(TAB)			
			.append("label = ").append(this.label).append(TAB)			
			.append("name = ").append(this.name).append(TAB)			
			.append("descr = ").append(this.descr).append(TAB)			
			.append("text = ").append(this.text).append(TAB)			
			.append("url = ").append(this.url).append(TAB)
	        .append(" )");
	    return retValue.toString();
	}


}


