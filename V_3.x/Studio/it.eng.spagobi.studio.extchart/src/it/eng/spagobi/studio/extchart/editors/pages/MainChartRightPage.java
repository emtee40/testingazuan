package it.eng.spagobi.studio.extchart.editors.pages;

import it.eng.spagobi.studio.extchart.editors.ExtChartEditor;
import it.eng.spagobi.studio.extchart.editors.pages.editorComponent.SeriesPanel;
import it.eng.spagobi.studio.extchart.editors.pages.editorComponent.XAxePanel;
import it.eng.spagobi.studio.extchart.editors.pages.editorComponent.YAxePanel;
import it.eng.spagobi.studio.extchart.model.bo.Axes;
import it.eng.spagobi.studio.extchart.model.bo.ExtChart;
import it.eng.spagobi.studio.extchart.utils.ExtChartConstants;
import it.eng.spagobi.studio.extchart.utils.ExtChartUtils;
import it.eng.spagobi.studio.extchart.utils.SWTUtils;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.Section;
import org.eclipse.ui.part.EditorPart;
import org.slf4j.LoggerFactory;

public class MainChartRightPage extends AbstractPage {

	private static org.slf4j.Logger logger = LoggerFactory.getLogger(MainChartRightPage.class);


	Composite xAxeComposite;
	YAxePanel leftAxeBuilder;
	YAxePanel rightAxeBuilder;
	XAxePanel bottomAxeBuilder;
	SeriesPanel seriesBuilder;

	ExtChartEditor editor;
	ExtChart extChart;
	String projectName;



	public MainChartRightPage(Composite parent, int style) {
		super(parent, style);
		setLayout(new FillLayout(SWT.HORIZONTAL));

	}

	public void drawPage(){
		logger.debug("IN");
		FormToolkit toolkit = SWTUtils.createFormToolkit(getParent());
		Section sectionProp = SWTUtils.createSection(this);
		sectionProp.setText("Chart Measures and Axes");
		sectionProp.setDescription("");
		sectionProp.setExpanded(true);


		// find the first y Axe

		Composite compositeProp = SWTUtils.createGridCompositeOnSection(sectionProp, 2);
		//compositeProp.setLayoutData(SWTUtils.makeGridDataLayout(GridData.FILL_BOTH, null, null));


		// get first numeric axe (left- bottom- right- top)
		Axes leftAxe =   ExtChartUtils.getYAxe(extChart, 1);
		logger.debug("left axe found : "+leftAxe != null ? "true" : "false");
		leftAxeBuilder = new YAxePanel(compositeProp, SWT.NULL, leftAxe, ExtChartConstants.AXE_TYPE_NUMERIC);
		leftAxeBuilder.setEditor(editor);
		leftAxeBuilder.setAxeType(ExtChartConstants.AXE_TYPE_NUMERIC);
		leftAxeBuilder.drawAxeComposite();

		// get first numeric axe (left- bottom- right- top)
		Axes rightAxe=   ExtChartUtils.getYAxe(extChart, 2);
		logger.debug("right axe found : "+rightAxe != null ? "true" : "false");
		rightAxeBuilder = new YAxePanel(compositeProp, SWT.NULL, rightAxe, ExtChartConstants.AXE_TYPE_NUMERIC);
		rightAxeBuilder.setEditor(editor);
		rightAxeBuilder.setAxeType(ExtChartConstants.AXE_TYPE_NUMERIC);
		rightAxeBuilder.drawAxeComposite();

		seriesBuilder = new SeriesPanel(compositeProp, SWT.NULL, extChart.getSeriesList().getSeries());
		seriesBuilder.setEditor(editor);
		seriesBuilder.drawSerieComposite();

		GridData gd = new GridData(GridData.FILL_BOTH);
		gd.horizontalSpan = 2;
		seriesBuilder.getGroup().setLayoutData(gd);

		toolkit.createLabel(compositeProp, "");

		// The x Axe; it is recognised in the chart by the type: for bar is category
		Axes xAxe =   ExtChartUtils.getXAxe(extChart);
		bottomAxeBuilder = new XAxePanel(compositeProp, SWT.NULL, xAxe);
		bottomAxeBuilder.setEditor(editor);
		bottomAxeBuilder.drawAxeComposite();

		toolkit.createLabel(compositeProp, "");

		sectionProp.setClient(compositeProp);	
		logger.debug("OUT");
	}

	public ExtChartEditor getEditor() {
		return editor;
	}

	public void setEditor(ExtChartEditor editor) {
		this.editor = editor;
	}



	public ExtChart getExtChart() {
		return extChart;
	}

	public void setExtChart(ExtChart extChart) {
		this.extChart = extChart;
	}

	public YAxePanel getLeftAxeBuilder() {
		return leftAxeBuilder;
	}

	public void setLeftAxeBuilder(YAxePanel leftAxeBuilder) {
		this.leftAxeBuilder = leftAxeBuilder;
	}

	public YAxePanel getRightAxeBuilder() {
		return rightAxeBuilder;
	}

	public void setRightAxeBuilder(YAxePanel rightAxeBuilder) {
		this.rightAxeBuilder = rightAxeBuilder;
	}

	public XAxePanel getBottomAxeBuilder() {
		return bottomAxeBuilder;
	}

	public void setBottomAxeBuilder(XAxePanel bottomAxeBuilder) {
		this.bottomAxeBuilder = bottomAxeBuilder;
	}

	public SeriesPanel getSeriesBuilder() {
		return seriesBuilder;
	}

	public void setSeriesBuilder(SeriesPanel seriesBuilder) {
		this.seriesBuilder = seriesBuilder;
	}




}
