package it.eng.spagobi.studio.extchart.model.bo;

public class StyleSubTitle {

	public static final String COLOR = "color";
	public static final String FONT_WEIGHT = "fontWeight";
	public static final String FONT_SIZE = "fontSize";

	
	private String color; //combo blue,yellow
	private String fontWeight; //combo
	private Integer fontSize;
	
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getFontWeight() {
		return fontWeight;
	}
	public void setFontWeight(String fontWeight) {
		this.fontWeight = fontWeight;
	}
	public Integer getFontSize() {
		return fontSize;
	}
	public void setFontSize(Integer fontSize) {
		this.fontSize = fontSize;
	}
	
	
	
}
