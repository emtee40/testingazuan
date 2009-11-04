package it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.metadata;


import org.eclipse.swt.widgets.Composite;

import it.eng.spagobi.studio.documentcomposition.editors.Designer;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.Style;
import it.eng.spagobi.studio.documentcomposition.editors.model.documentcomposition.bo.ModelBO;

public class MetadataStyle {

	private int x;
	private int y;
	private int widthPercentage;
	private int heightPercentage;




	public MetadataStyle(Style styleS) {
		String style=styleS.getStyle();
		int indexTop=style.indexOf("top:");

		int indexOfPXAfterTop=style.indexOf("px;", indexTop);
		String topValue=style.substring(indexTop+4, indexOfPXAfterTop);

		String leftValue="";
		int indexLeft=style.indexOf("left:");
		if(indexLeft==-1){
			indexLeft=style.indexOf("margin:");
			int indexOfPXAfterLeft=style.indexOf("px;", indexLeft);
			leftValue=style.substring(indexLeft+7, indexOfPXAfterLeft);

		}
		else{
			int indexOfPXAfterLeft=style.indexOf("px;", indexLeft);
			leftValue=style.substring(indexLeft+5, indexOfPXAfterLeft);
		}

		int indexWidth=style.indexOf("width:");
		int indexOfPXAfterWidth=style.indexOf("%;", indexWidth);
		String widthValue=style.substring(indexWidth+6, indexOfPXAfterWidth);


		int indexHeight=style.indexOf("height:");
		int indexOfPXAfterHeight=style.indexOf("%;", indexHeight);
		String heightValue=style.substring(indexHeight+7, indexOfPXAfterHeight);

		x=Integer.valueOf(leftValue).intValue();
		y=Integer.valueOf(topValue).intValue();
		widthPercentage=Integer.valueOf(widthValue).intValue();

		//if template has been made with SpagoBISTudio  add 1
		// but not if was created with manual style!
		if(new MetadataBO().getMetadataDocumentComposition().isMadeWithStudio() && (styleS.getMode()==null || !styleS.getMode().equalsIgnoreCase("manual"))){
			widthPercentage+=1;
		}
		heightPercentage=Integer.valueOf(heightValue).intValue();



		String videoHeight=(new ModelBO()).getModel().getDocumentsConfiguration().getVideoHeight();
		String videoWidth=(new ModelBO()).getModel().getDocumentsConfiguration().getVideoWidth();
		int videoHeightI=Integer.valueOf(videoHeight).intValue();
		int videoWidthI=Integer.valueOf(videoWidth).intValue();

		// x : 800 (DESIGNER_WIDTH) = mio : videoWidth 
		//		int scaledX=(x*videoWidthI) / Designer.DESIGNER_WIDTH;
		//		int scaledY=(y*videoHeightI) / Designer.DESIGNER_HEIGHT;
		//
		//		x=scaledX;
		//		y=scaledY;

	}

	public int getWidthFromPerc(Composite mainComposite){
		// calculate the percentage of the whole composite
		int mainSize=mainComposite.getBounds().width;
		mainSize=mainSize/100;
		int toReturn=(mainSize)*widthPercentage;
		return toReturn;
	}
	public int getHeightFromPerc(Composite mainComposite){
		// calculate the percentage of the whole composite
		int mainSize=mainComposite.getBounds().height;		
		mainSize=mainSize/100;		
		int toReturn=(mainSize)*heightPercentage;
		return toReturn;
	}


	public int getX() {
		return x;
	}
	public void setX(int x) {
		this.x = x;
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
	public int getWidthPercentage() {
		return widthPercentage;
	}
	public void setWidthPercentage(int widthPercentage) {
		this.widthPercentage = widthPercentage;
	}
	public int getHeightPercentage() {
		return heightPercentage;
	}
	public void setHeightPercentage(int heightPercentage) {
		this.heightPercentage = heightPercentage;
	}



}
