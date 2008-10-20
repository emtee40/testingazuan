package it.eng.spagobi.tools.dataset.bo;

import org.apache.log4j.Logger;

public class ScriptDataSet extends DataSet {
	private String script;
	private static transient Logger logger=Logger.getLogger(FileDataSet.class);
	
	public String getScript() {
		return script;
	}
	
	public ScriptDataSet() {
		super();
	}
	

	public ScriptDataSet(DataSet a) {
    	setDsId(a.getDsId());
    	setLabel(a.getLabel());
    	setName(a.getName());
    	setDescription(a.getDescription());
	}

	public ScriptDataSet(String script) {
		super();
		this.script = script;
	}

	public void setScript(String script) {
		this.script = script;
	}
	
	

}
