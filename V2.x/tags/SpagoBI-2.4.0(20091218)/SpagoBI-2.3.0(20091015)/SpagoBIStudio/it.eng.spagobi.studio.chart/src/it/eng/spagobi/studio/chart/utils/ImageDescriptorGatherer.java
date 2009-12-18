package it.eng.spagobi.studio.chart.utils;

import it.eng.spagobi.studio.chart.Activator;

import java.io.File;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.ui.plugin.AbstractUIPlugin;

public class ImageDescriptorGatherer {

	public static ImageDescriptor getFolderOpenIDesc() {
		String folderopenimgPath = "icons" + File.separator + "folderopen.gif";
		ImageDescriptor folderopenimgdesc = AbstractUIPlugin.imageDescriptorFromPlugin(Activator.PLUGIN_ID, folderopenimgPath);
		return folderopenimgdesc;
	}
	
	public static ImageDescriptor getFolderIDesc() {
		String folderimgPath = "icons" + File.separator + "folder.gif";
		ImageDescriptor folderimgdesc = AbstractUIPlugin.imageDescriptorFromPlugin(Activator.PLUGIN_ID, folderimgPath);
		return folderimgdesc;
	}
	
	public static ImageDescriptor getDocumentIDesc() {
		String documentimgPath = "icons" + File.separator + "sbidocument.gif";
		ImageDescriptor documentimgdesc = AbstractUIPlugin.imageDescriptorFromPlugin(Activator.PLUGIN_ID, documentimgPath);
		return documentimgdesc;
	}
	
}
