package it.eng.qbe.utility;

import it.eng.qbe.model.DataMartModel;
import it.eng.qbe.wizard.ISingleDataMartWizardObject;
import it.eng.spago.base.RequestContainer;
import it.eng.spago.base.SessionContainer;
import it.eng.spago.security.IEngUserProfile;

import java.beans.XMLDecoder;
import java.beans.XMLEncoder;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import sun.reflect.ReflectionFactory.GetReflectionFactoryAction;

/**
 * @author Andrea Zoppello
 * 
 * An implementation of IQueryPersister that retrieve and persist 
 * queries using the File System
 *
 */
public class LocalFileSystemQueryPersister implements
		IQueryPersister {

	protected void persistToFile(DataMartModel dm, ISingleDataMartWizardObject wizObject, String fileName) {

		try {
			File f = new File(fileName);
			if (!f.exists()){
				f.createNewFile();
			}
		    XMLEncoder encoder = new XMLEncoder(new BufferedOutputStream(
		        new FileOutputStream(fileName)));
		    encoder.writeObject(wizObject);
		    encoder.close();
		} catch (IOException e) {
			Logger.error(LocalFileSystemQueryPersister.class, e);
		}
		
	}
	public void persist(DataMartModel dm, ISingleDataMartWizardObject wizObject) {
		 // Serialize object into XML
		String qbeDataMartDir = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MART_DIR.dir");
		String key = wizObject.getQueryId();
		String fileName = null;
		
		String publicDmDir = qbeDataMartDir +System.getProperty("file.separator")+  dm.getPath();
		String privateDmDir = publicDmDir + System.getProperty("file.separator") + wizObject.getOwner();
		if (wizObject.getVisibility() == false){
			File f = new File(privateDmDir);
			if (!f.exists()){
				f.mkdirs();
			}
			fileName =  privateDmDir + System.getProperty("file.separator") + key+ ".qbe";
		}else{
			fileName = qbeDataMartDir +System.getProperty("file.separator")+  dm.getPath() + System.getProperty("file.separator") + key+ ".qbe";
		}
		
		
		persistToFile(dm, wizObject, fileName);
	}
	
	public ISingleDataMartWizardObject load(DataMartModel dm, String key) {

    	RequestContainer requestCont = RequestContainer.getRequestContainer();
        IEngUserProfile userProfile =(IEngUserProfile)requestCont.getSessionContainer().getPermanentContainer().getAttribute(IEngUserProfile.ENG_USER_PROFILE);
        SpagoBIInfo spagoBIInfo =(SpagoBIInfo)requestCont.getSessionContainer().getAttribute("spagobi");
    	
        
        String qbeDataMartDir = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MART_DIR.dir");
        
        String fileName = qbeDataMartDir +System.getProperty("file.separator")+  dm.getPath() + System.getProperty("file.separator") + key+ ".qbe";
        
        ISingleDataMartWizardObject wiz = loadFromFile(dm, new File(fileName));
        if (wiz == null && userProfile != null){
        	fileName = qbeDataMartDir + System.getProperty("file.separator")+  dm.getPath() + System.getProperty("file.separator") + userProfile.getUserUniqueIdentifier() + System.getProperty("file.separator") + key+ ".qbe";
        	wiz = loadFromFile(dm, new File(fileName));
        }
        
        if (wiz == null && spagoBIInfo != null){
        	fileName = qbeDataMartDir + System.getProperty("file.separator")+  dm.getPath() + System.getProperty("file.separator") + spagoBIInfo.getUser() + System.getProperty("file.separator") + key+ ".qbe";
        	wiz = loadFromFile(dm, new File(fileName));
        }
        return wiz;
	}
    
    protected ISingleDataMartWizardObject loadFromFile(DataMartModel dm, File f) {
        try {
            XMLDecoder decoder = new XMLDecoder(new BufferedInputStream(
                new FileInputStream(f)));
        
            
            ISingleDataMartWizardObject o = (ISingleDataMartWizardObject)decoder.readObject();
            decoder.close();
            return o;
        } catch (FileNotFoundException e) {
    		Logger.error(LocalFileSystemQueryPersister.class, e);
    		return null;
        }
    }
    
    private List loadFirstLevelQuery(DataMartModel dm, String directory){
    	
    	File dir = new File(directory);
//   	 It is also possible to filter the list of returned files.
       // This example does not return any files that start with `.'.
       FilenameFilter filter = new FilenameFilter() {
           public boolean accept(File dir, String name) {
               return name.endsWith("qbe");
           }
       };
       
       
   	
   	ISingleDataMartWizardObject query = null;
   	List queries = new ArrayList();
   	File f = null;
       boolean isDir = dir.isDirectory();
       if (isDir) {
       	String[] children = dir.list(filter);
           if (children == null) {
               // Either dir does not exist or is not a directory
           } else {
               for (int i=0; i<children.length; i++) {
                   // Get filename of file or directory
                   String filename = children[i];
                   f = new File(dir, filename);
                   if (!f.isDirectory()){
                   	   query = loadFromFile(dm,f);
                       queries.add(query);
                   }
                   
               }
           }
       }
       
       return queries;
    }
    public List loadAllQueries(DataMartModel dm) {
    	String qbeDataMartDir = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MART_DIR.dir");
    	String theDir = qbeDataMartDir +System.getProperty("file.separator")+ dm.getPath();
    	return loadFirstLevelQuery(dm, theDir);
    }
    
    public List getPrivateQueriesFor(DataMartModel dm, String userID) {
    	String qbeDataMartDir = (String)it.eng.spago.configuration.ConfigSingleton.getInstance().getAttribute("QBE.QBE-MART_DIR.dir");
    	String privateDir = qbeDataMartDir + System.getProperty("file.separator")+ dm.getPath() + System.getProperty("file.separator") + userID; 
    	
    	return loadFirstLevelQuery(dm, privateDir);
    }

	

}
