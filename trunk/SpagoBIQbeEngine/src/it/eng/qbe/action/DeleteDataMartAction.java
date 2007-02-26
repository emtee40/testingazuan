package it.eng.qbe.action;

import it.eng.qbe.utility.FileUtils;
import it.eng.spago.base.SourceBean;
import it.eng.spago.dispatching.action.AbstractAction;

import java.io.File;


/**
 * @author Andrea Zoppello
 * 
 * This Action is responsible to instantiate the datamart where
 * 
 * working with qbe
 */
public class DeleteDataMartAction extends AbstractAction {

	/** 
	 * @see it.eng.spago.dispatching.service.ServiceIFace#service(it.eng.spago.base.SourceBean, it.eng.spago.base.SourceBean)
	 */
	public void service(SourceBean request, SourceBean response) throws Exception {
		String dataMartPath = (String)request.getAttribute("PATH");
      
   		String qbeDataMartDir = FileUtils.getQbeDataMartDir((File)null);
   		String dataMartDir = qbeDataMartDir  + System.getProperty("file.separator") + dataMartPath;
   		
   		File f = new File(dataMartDir);
   		
   		if (f.exists() && f.isDirectory()){
   			deleteDir(f);
   		}
	}
	
	public static boolean deleteDir(File dir) {
        if (dir.isDirectory()) {
            String[] children = dir.list();
            for (int i=0; i<children.length; i++) {
                boolean success = deleteDir(new File(dir, children[i]));
                if (!success) {
                    return false;
                }
            }
        }
    
        // The directory is now empty so delete it
        return dir.delete();
    }
}
