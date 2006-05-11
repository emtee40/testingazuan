package it.eng.spagobi.importexport.version18;

import java.io.File;


public class ImpExpGeneralUtilities {

	public static boolean deleteDir(File dir) {
		 if(dir.isDirectory()) {
			 String[] children = dir.list();
			 for (int i=0; i<children.length; i++) {
				 boolean success = deleteDir(new File(dir, children[i]));
				 if (!success) {
					 return false;
				 }
			 }
		 }
		 return dir.delete();
	 }
	
}
