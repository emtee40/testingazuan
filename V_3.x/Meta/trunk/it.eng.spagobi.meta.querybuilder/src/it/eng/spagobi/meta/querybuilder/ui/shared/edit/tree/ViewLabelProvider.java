/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.querybuilder.ui.shared.edit.tree;

import it.eng.qbe.model.structure.IModelNode;
import it.eng.qbe.model.structure.IModelObject;
import it.eng.qbe.model.structure.ModelCalculatedField;
import it.eng.spagobi.commons.resource.IResourceLocator;
import it.eng.spagobi.meta.querybuilder.SpagoBIMetaQueryBuilderPlugin;

import java.net.URL;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.ISharedImages;
import org.eclipse.ui.PlatformUI;

/**
 * @author Alberto Ghedin (alberto.ghedin@eng.it)
 *
 */

public 	class ViewLabelProvider extends LabelProvider {

	private ModelLabelProvider modelLabelProvider;
//	private static final String imgPath = "img";
//	private TreeViewer viewer;
	
	private static final IResourceLocator RL = SpagoBIMetaQueryBuilderPlugin.getInstance().getResourceLocator();
	
	
	public ViewLabelProvider (TreeViewer viewer, ModelLabelProvider modelLabelProvider){
//		this.viewer = viewer;
		this.modelLabelProvider = modelLabelProvider;
	}
	
	public String getText(Object o) {
		String text;
		
		if(o instanceof IModelObject){
			IModelObject modelObject = (IModelObject)o;
			text =  modelLabelProvider.getLabel(modelObject);
		} else {
			text = o.getClass().getName();
		}
		
		return text;
	}
	public Image getImage(Object obj) {   
		String type = null;
		Image img = null;
		type = (String)((IModelNode)obj).getProperties().get("type");
		
		try {
			if (obj instanceof ModelCalculatedField){
				img = ImageDescriptor.createFromURL( (URL)RL.getImage("it.eng.spagobi.meta.querybuilder.ui.shared.edit.tree.node.calculation") ).createImage();
			} else {
				img = ImageDescriptor.createFromURL( (URL)RL.getImage("it.eng.spagobi.meta.querybuilder.ui.shared.edit.tree.node."+type) ).createImage();
			}
		} catch (Exception e) {
			String imageKey = ISharedImages.IMG_OBJ_ELEMENT;
			img =  PlatformUI.getWorkbench().getSharedImages().getImage(imageKey);
		}

		return img;
	}
	

	
}