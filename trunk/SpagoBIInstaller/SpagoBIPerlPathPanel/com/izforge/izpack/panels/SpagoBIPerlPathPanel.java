package com.izforge.izpack.panels;

import java.io.File;

import com.izforge.izpack.installer.InstallData;
import com.izforge.izpack.installer.InstallerFrame;
import com.izforge.izpack.util.AbstractUIHandler;
import com.izforge.izpack.util.OsVersion;

public class SpagoBIPerlPathPanel extends TargetPanel {

	private static final long serialVersionUID = 0L;

	private String variableName;
	
	public SpagoBIPerlPathPanel(InstallerFrame parent, InstallData idata) {
        super(parent, idata);
		setMustExist(false);
		setVariableName("SPAGOBI_PERL_HOME_PATH");
	}
	
    public boolean isValidated() {
    	String chosenPath = pathSelectionPanel.getPath();
        boolean ok = true;
        File path = new File(chosenPath);
        if (!path.exists()) {
            int res = askQuestion(parent.langpack.getString("installer.warning"), 
            		getI18nStringForClass("perl.dir.missing", "SpagoBIPerlPathPanel"),
                    AbstractUIHandler.CHOICES_YES_NO, AbstractUIHandler.ANSWER_YES);
            ok = res == AbstractUIHandler.ANSWER_YES;
        } else {
            if (!chosenPath.endsWith(File.separator)) {
            	chosenPath += File.separator;
            }
            String perlExecFilePath = null;
            if (OsVersion.IS_WINDOWS) {
            	perlExecFilePath = chosenPath + "bin" + File.separator + "perl.exe";
            } else {
            	perlExecFilePath = chosenPath + "bin" + File.separator + "perl";
            }
            File perlExecFile = new File(perlExecFilePath);
            if (!perlExecFile.exists()) {
	            int res = askQuestion(parent.langpack.getString("installer.warning"), 
	            		getI18nStringForClass("perl.dir.not.valid", "SpagoBIPerlPathPanel"),
	                    AbstractUIHandler.CHOICES_YES_NO, AbstractUIHandler.ANSWER_YES);
	            ok = res == AbstractUIHandler.ANSWER_YES;
            }
        }
        return ok;
    }

    /**
     * Returns the name of the variable which should be used for the path.
     * 
     * @return the name of the variable which should be used for the path
     */
    public String getVariableName()
    {
        return variableName;
    }

    /**
     * Sets the name for the variable which should be set with the path.
     * 
     * @param string variable name to be used
     */
    public void setVariableName(String string)
    {
        variableName = string;
    }
 
    public String getSummaryBody()
    {
        return (idata.getVariable(getVariableName()));
    }
    
}
