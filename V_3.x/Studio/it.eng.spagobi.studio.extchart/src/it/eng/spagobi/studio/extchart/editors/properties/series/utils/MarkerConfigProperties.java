package it.eng.spagobi.studio.extchart.editors.properties.series.utils;

import it.eng.spagobi.studio.extchart.editors.ExtChartEditor;
import it.eng.spagobi.studio.extchart.editors.properties.series.SeriesProperties;
import it.eng.spagobi.studio.extchart.model.bo.Label;
import it.eng.spagobi.studio.extchart.model.bo.MarkerConfig;
import it.eng.spagobi.studio.extchart.model.bo.Tips;
import it.eng.spagobi.studio.extchart.utils.PopupPropertiesDialog;
import it.eng.spagobi.studio.extchart.utils.SWTUtils;

import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Spinner;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.slf4j.LoggerFactory;

public class MarkerConfigProperties extends PopupPropertiesDialog{
	private static org.slf4j.Logger logger = LoggerFactory.getLogger(MarkerConfigProperties.class);

	
	
	
	MarkerConfig markerConfig;
	Spinner sizeSpinner;
	Spinner radiusSpinner;
	Combo typeCombo;	
	
	SeriesProperties father;

	public MarkerConfigProperties(ExtChartEditor editor, MarkerConfig markerConfig, Shell comp, SeriesProperties father) {
		super(editor, comp);
		this.markerConfig = markerConfig; 
		this.editor = editor;
		this.father = father;
		toolkit = new FormToolkit(comp.getDisplay());
	}


	public void drawProperties(){
		logger.debug("IN");

		
		String[] types =new String[]{"cross", "circle"};
		
		typeCombo = SWTUtils.drawCombo(dialog, types
				, markerConfig != null && markerConfig.getType() != null ? markerConfig.getType() : "cross"
				, "Type: ");

		sizeSpinner =SWTUtils.drawSpinner(dialog, 
				markerConfig.getSize() != null ? markerConfig.getSize() : null
						, "Size: ");


		radiusSpinner =SWTUtils.drawSpinner(dialog, 
				markerConfig.getRadius() != null ? markerConfig.getRadius() : null
						, "Radius: ");

	
		logger.debug("OUT");
	}


	public void performOk(){
		logger.debug("IN");
		editor.setIsDirty(true);

		if(markerConfig == null ){
			logger.debug("create a MarkerConfig definition");
			markerConfig = new MarkerConfig();
		}

		int radiusWidth = radiusSpinner.getSelection();
		markerConfig.setRadius(radiusWidth);
		logger.debug("radius " + radiusWidth);
		
		int sizeWidth = sizeSpinner.getSelection();
		markerConfig.setSize(sizeWidth);
		logger.debug("size " + sizeWidth);
		
		
		// memorize new Label
		father.getMarkerConfigHolder()[0] = markerConfig;

		logger.debug("OUT");
	}




}
