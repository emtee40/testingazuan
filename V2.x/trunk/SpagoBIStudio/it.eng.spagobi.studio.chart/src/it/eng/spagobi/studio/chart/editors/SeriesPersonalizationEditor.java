package it.eng.spagobi.studio.chart.editors;

import it.eng.spagobi.studio.chart.editors.model.chart.ChartModel;
import it.eng.spagobi.studio.chart.utils.SeriePersonalization;
import it.eng.spagobi.studio.core.log.SpagoBILogger;

import java.util.Iterator;

import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.ColorDialog;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;
import org.eclipse.swt.widgets.TableItem;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.forms.events.ExpansionAdapter;
import org.eclipse.ui.forms.events.ExpansionEvent;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.ScrolledForm;
import org.eclipse.ui.forms.widgets.Section;
import org.eclipse.ui.forms.widgets.TableWrapData;


/**
 * 
 * @author gavardi
 *
 *	Thios class has method for the serie personalizations form creation, can change (if enabled) colors, labels, drawing style and scale
 */

public class SeriesPersonalizationEditor {

	Section sectionSeries=null;
	Composite sectionClientSeries=null;


	final Label newSerLabel;
	final Text newSerLabelText;
	final Label newColorLabel;	
	Composite innerSection; 
	final Label colorLabel;
	final Button colorButton;	
	final Label drawLabel;
	final Combo comboDraw;
	final Label scaleLabel;
	final Combo comboScale;
	final Table parsTable;
	final Text newSerName; 
	// Field for personalization

	public final static int NAME=0;
	public final static int COLOR=1;
	public final static int LABEL=2;
	public final static int DRAW=3;
	public final static int SCALE=4;	

	public SeriesPersonalizationEditor(final ChartModel model,FormToolkit toolkit, final ScrolledForm form) {

		sectionSeries = toolkit.createSection(form.getBody(), 
				Section.DESCRIPTION|Section.TITLE_BAR|Section.TWISTIE);
		sectionClientSeries=toolkit.createComposite(sectionSeries);

		//********* Main Section ******************
		TableWrapData td = new TableWrapData(TableWrapData.FILL);
		sectionSeries.setLayoutData(td);
		sectionSeries.addExpansionListener(new ExpansionAdapter() {
			public void expansionStateChanged(ExpansionEvent e) {
				form.reflow(true);
			}
		});
		sectionSeries.setText("Series Labels parameters");
		sectionSeries.setDescription("Set all the drill parameteres");



		// ********** Main Layout ***************
		GridLayout gl = new GridLayout();
		gl.numColumns = 2;
		sectionClientSeries.setLayout(gl);

		//Image imageAdd = PlatformUI.getWorkbench( ).getSharedImages( ).getImage( ISharedImages.IMG_OBJ_ELEMENT);
		Button buttonAdd = new Button(sectionClientSeries, SWT.PUSH);
		buttonAdd.setText("Add");
		//buttonAdd.setImage(imageAdd);
		buttonAdd.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_END));
		buttonAdd.setToolTipText("Add serie");
		buttonAdd.pack();

		final Button buttonRem = new Button(sectionClientSeries, SWT.PUSH);
		buttonRem.setToolTipText("Remove");
		//		Image imageRem = PlatformUI.getWorkbench( ).getSharedImages( ).getImage( ISharedImages.IMG_TOOL_DELETE);
		buttonRem.setText("Cancel");
		buttonRem.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		buttonRem.setToolTipText("Remove serie");
		//		buttonRem.setImage(imageRem);
		buttonRem.pack();


		parsTable = new Table (sectionClientSeries, SWT.SINGLE | SWT.BORDER | SWT.FULL_SELECTION | SWT.V_SCROLL);
		parsTable.setLinesVisible (true);
		parsTable.setHeaderVisible (true);
		GridData g=new GridData(GridData.FILL_BOTH);
		//g.verticalSpan=2;
		g.horizontalSpan=2	;
		parsTable.setLayoutData(g);

		GridData data = new GridData(SWT.FILL, SWT.FILL, true, true);
		data.heightHint = 150;
		data.widthHint=500;
		parsTable.setLayoutData(data);

		ChartEditorUtils.addBlanckSpace(sectionClientSeries);

		//		TableColumn column1 = new TableColumn (parsTable, SWT.NONE);
		//		column1.setText ("Serie Name");
		//		column1.setWidth(300);
		//		TableColumn column2 = new TableColumn (parsTable, SWT.NONE);
		//		column2.setText ("Color");
		//		column2.setWidth(400);
		//		TableColumn column3 = new TableColumn (parsTable, SWT.NONE);
		//		column3.setText ("Label");
		//		column3.setWidth(500);
		//		TableColumn column4 = new TableColumn (parsTable, SWT.NONE);
		//		column4.setText ("Draw Style");
		//		column4.setWidth(400);
		//		TableColumn column5 = new TableColumn (parsTable, SWT.NONE);
		//		column5.setText ("Scale");
		//		column5.setWidth(100);


		String[] titles = {"       Serie Name       ", "     Color     ", "         Label         ", "     Draw Style      ", " Scale "};
		for (int i=0; i<titles.length; i++) {
			TableColumn column = new TableColumn (parsTable, SWT.NONE);
			column.setText (titles [i]);
		}
		if(model.getSeriesPersonalizationHashMap()!=null){
			for (Iterator iterator = model.getSeriesPersonalizationHashMap().keySet().iterator(); iterator.hasNext();) {
				String parName = (String) iterator.next();
				SeriePersonalization serPers=model.getSeriesPersonalizationHashMap().get(parName);
				TableItem item = new TableItem (parsTable, SWT.NONE);
				item.setText(NAME, parName);
				if(model.isSeriesColorPersonalization() && serPers.getColor()!=null){
					item.setText(COLOR,ChartEditor.convertRGBToHexadecimal(serPers.getColor()));
				}
				if(model.isSeriesLabelPersonalization() && serPers.getLabel()!=null){
					item.setText(LABEL,serPers.getLabel());
				}
				if(model.isSeriesDrawPersonalization() && serPers.getDraw()!=null){
					item.setText(DRAW,serPers.getDraw());
				}
				if(model.isSeriesScalesPersonalization()){
					item.setText(SCALE,Integer.valueOf(serPers.getScale()).toString());
				}
			}
			for (int i=0; i<titles.length; i++) {
				parsTable.getColumn (i).pack ();
			}	

		} 
		parsTable.pack();


		// ********** List (or table)***************
		//		parsList.setToolTipText("Inserted series");
		//		GridData g=new GridData(GridData.FILL_BOTH);
		//		g.verticalSpan=3;
		//		g.horizontalSpan=2;
		//		parsList.setLayoutData(g);
		//		// Fill the list
		//		if(model.getSeriesPersonalizationHashMap()!=null){
		//			for (Iterator iterator = model.getSeriesPersonalizationHashMap().keySet().iterator(); iterator.hasNext();) {
		//				String parName = (String) iterator.next();
		//				parsList.add(parName);
		//			}			
		//		} 
		//		parsList.redraw();
		//
		//******************	Serie NAME *********************

		final Group group=new Group(sectionClientSeries, SWT.NULL);
		group.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		
		GridLayout g2 = new GridLayout();
		g2.numColumns =4 ;
		group.setLayout(g2);
		
		Label newNameLabel = new Label(group, SWT.NULL); 
		newNameLabel.setText("    Serie Name: ");
		newNameLabel.setToolTipText("New serie's name");
		//newNameLabel.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		//newNameLabel.pack();		
		newSerName = new Text(group, SWT.BORDER);
		newSerName.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_FILL));
		newSerName.setEnabled(true);


		newSerLabel=new Label(group, SWT.NULL); ;
		newSerLabel.setText("                         Label Serie: ");		
		//newSerLabel.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		newSerLabel.pack();
		newSerLabelText=new Text(group, SWT.BORDER);;
		newSerLabelText.setToolTipText("Serie Label");
		//newSerLabelText.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		newSerLabelText.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_FILL));
		newSerLabelText.pack();
		newSerLabelText.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent event) {
				model.getEditor().setIsDirty(true);				
				String newLabel = newSerLabelText.getText();
				int selection = parsTable.getSelectionIndex();
				String parNameSelected=null;
				if(selection!=-1){
					TableItem tableItem=parsTable.getItem(selection);
					String serName=tableItem.getText(NAME);
					SeriePersonalization seriePers=model.getSeriesPersonalizationHashMap().get(serName);
					if(seriePers!=null){seriePers.setLabel(newLabel);
					tableItem.setText(LABEL, newLabel);
					}
				}
			}
		});
		//		newSerLabel.setEnabled(false);
		//		newSerLabelText.setEnabled(false);




		newColorLabel=new Label(group, SWT.NULL);

		innerSection = toolkit.createComposite(group);
		colorLabel = new Label(innerSection, SWT.BORDER);
		colorButton = new Button(innerSection, SWT.PUSH);
		colorButton.setToolTipText("Color of the serie");
		//newColorLabel.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		newColorLabel.setText("    Color serie: ");
		//		newColorLabel.setEnabled(false);
		newColorLabel.pack();

		final Color color = new org.eclipse.swt.graphics.Color(group.getDisplay(), new RGB(255,255,255));
		GridLayout colorGd = new GridLayout();
		colorGd.numColumns = 2;
		colorGd.marginHeight = 0;
		colorGd.marginBottom = 0;
		innerSection.setLayout(colorGd);
		colorLabel.setText("          ");
		colorLabel.setBackground(color);
		colorButton.setText("Color...");
		final Shell parentShell = group.getShell();
		colorButton.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				final Shell centerShell = new Shell(parentShell, SWT.NO_TRIM);
				centerShell.setLocation(
						(parentShell.getSize().x - ChartEditor.COLORDIALOG_WIDTH) / 2,
						(parentShell.getSize().y - ChartEditor.COLORDIALOG_HEIGHT) / 2);
				ColorDialog colorDg = new ColorDialog(centerShell,
						SWT.APPLICATION_MODAL);
				colorDg.setRGB(colorLabel.getBackground().getRGB());
				colorDg.setText("Choose a color");
				RGB rgb = colorDg.open();
				//final Map<String, SeriePersonalization> parsMap=model.getSeriesPersonalizationHashMap();					
				if (rgb != null) {
					// Dispose the old color, create the
					// new one, and set into the label
					color.dispose();
					Color newColor = new Color(parentShell.getDisplay(), rgb);
					colorLabel.setBackground(newColor);
					String newHexadecimal = ChartEditor.convertRGBToHexadecimal(rgb);
					int selection = parsTable.getSelectionIndex();
					//get ParSelected
					TableItem tableItem=parsTable.getItem(selection);
					String parNameSelected=tableItem.getText(NAME);
					SeriePersonalization seriePers=model.getSeriesPersonalizationHashMap().get(parNameSelected);
					if(seriePers!=null){
						seriePers.setColor(ChartEditor.convertHexadecimalToRGB(newHexadecimal));
						tableItem.setText(COLOR, newHexadecimal);
						tableItem.setBackground(COLOR, new Color(tableItem.getDisplay(),ChartEditor.convertHexadecimalToRGB(newHexadecimal)));
					}
					//centerShell.pack();
					centerShell.dispose();
				}
			}
		});			
		//		colorLabel.setEnabled(false);
		//		colorButton.setEnabled(false);




		drawLabel=new Label(group, SWT.NULL);
		drawLabel.setText("                         Draw style: ");		
		//drawLabel.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		drawLabel.pack();

		comboDraw=new Combo(group,  SWT.SIMPLE | SWT.DROP_DOWN | SWT.READ_ONLY);
		comboDraw.add("bar");
		comboDraw.add("line");
		comboDraw.add("line_no_shape");
		comboDraw.select(0);
		//comboDraw.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		comboDraw.pack();
		comboDraw.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent event) {
				model.getEditor().setIsDirty(true);				
				String comboText = comboDraw.getText();
				int selection = parsTable.getSelectionIndex();
				if(selection!=-1){
					//final Map<String, SeriePersonalization> parsMap=model.getSeriesPersonalizationHashMap();				
					TableItem item=parsTable.getItem(selection);
					String parNameSelected=item.getText(NAME);
					SeriePersonalization seriePers=model.getSeriesPersonalizationHashMap().get(parNameSelected);
					if(parNameSelected!=null){
						seriePers.setDraw(comboText);
						item.setText(DRAW,comboText);
					}
				}
			}
		});
		//		drawLabel.setEnabled(false);
		//		comboDraw.setEnabled(false);
		comboDraw.pack();


		newColorLabel.setToolTipText("Set the drawing shape; can be bar, line or line without shape on the category point");
		scaleLabel=new Label(group, SWT.NULL);
		scaleLabel.setText("    Map to scale: ");		
		//scaleLabel.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		comboScale=new Combo(group,  SWT.SIMPLE | SWT.DROP_DOWN | SWT.READ_ONLY);
		comboScale.setToolTipText("Map the serie to the first or to the second scale");
		comboScale.add("1");
		comboScale.add("2");
		comboScale.select(0);
		comboScale.pack();
		//comboScale.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
		comboScale.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent event) {
				model.getEditor().setIsDirty(true);				
				String comboText = comboScale.getText();
				int selection = parsTable.getSelectionIndex();
				if(selection!=-1){
					TableItem item=parsTable.getItem(selection);
					String parNameSelected=item.getText(NAME);
					SeriePersonalization seriePers=model.getSeriesPersonalizationHashMap().get(parNameSelected);
					if(parNameSelected!=null){
						seriePers.setScale(Integer.valueOf(comboText).intValue());
						item.setText(SCALE,comboText);
					}
				}
			}
		});
		//		comboScale.setEnabled(false);
		//		scaleLabel.setEnabled(false);
		scaleLabel.pack();
		comboScale.pack();

		// Add Button Listener
		Listener addListener = new Listener() {
			public void handleEvent(Event event) {
				model.getEditor().setIsDirty(true);
				String nameToAdd=newSerName.getText();
				//parsMap=model.getSeriesPersonalizationHashMap();
				if(nameToAdd==null || nameToAdd.equalsIgnoreCase("")){
					SpagoBILogger.warningLog("Specify a name for serie");
					MessageDialog.openWarning(group.getShell(), "Warning", "Specify a name for serie");
				}
				else if(model.getSeriesPersonalizationHashMap().keySet().contains(nameToAdd)){
					SpagoBILogger.warningLog("Name already present for Serie");
					MessageDialog.openWarning(group.getShell(), "Warning", "Name already present");					
				}
				else {					
					SeriePersonalization serPers=new SeriePersonalization(nameToAdd);
					TableItem item = new TableItem (parsTable, SWT.NONE);
					item.setText (NAME, nameToAdd);


					if(model.isSeriesLabelPersonalization()){
						if(newSerLabel.getText()!=null){
							serPers.setLabel(newSerLabel.getText());
							item.setText (LABEL, newSerLabel.getText());
						}
					}

					if(model.isSeriesDrawPersonalization()){
						String text=comboDraw.getText();
						serPers.setDraw(text);
						item.setText (DRAW, text);

					}

					if(model.isSeriesScalesPersonalization()){
						String text=comboScale.getText();
						serPers.setScale(Integer.valueOf(text));
						item.setText (SCALE, text);

					}
					if(model.isSeriesColorPersonalization()){
						RGB rgb=colorLabel.getBackground().getRGB();
						String text=ChartEditor.convertRGBToHexadecimal(rgb);
						serPers.setColor(rgb);
						item.setText (COLOR, text);
						item.setBackground(COLOR,new Color(item.getDisplay(),rgb));						

					}


					model.getSeriesPersonalizationHashMap().put(nameToAdd, serPers);
				}

			}
		};
		buttonAdd.addListener(SWT.Selection, addListener);
		buttonAdd.pack();


		// Add listener that show details of parameter selected
		parsTable.addListener (SWT.Selection, new Listener () {
			public void handleEvent (Event e) {
				model.getEditor().setIsDirty(true);				
				// get par selected
				int selection = parsTable.getSelectionIndex();
				TableItem itemSelected=parsTable.getItem(selection);
				String nameSerie=itemSelected.getText(0);
				String colorSerie=itemSelected.getText(1);
				String labelSerie=itemSelected.getText(2);
				String drawSerie=itemSelected.getText(3);
				String scaleSerie=itemSelected.getText(4);

				newSerName.setText(nameSerie);
				SeriePersonalization seriePers=model.getSeriesPersonalizationHashMap().get(nameSerie);

				colorSerie=seriePers.getColor()!=null ? ChartEditor.convertRGBToHexadecimal(seriePers.getColor()) : "";
				if(model.isSeriesColorPersonalization()==true && seriePers.getColor()!=null){
					Color newColor = new Color(parentShell.getDisplay(), seriePers.getColor());
					colorLabel.setBackground(newColor);

				}
				else
				{
					colorLabel.setBackground(null);
				}

				if(model.isSeriesLabelPersonalization()==true){ 
					labelSerie=seriePers.getLabel()!=null ? seriePers.getLabel() : "";
					newSerLabelText.setText(labelSerie);
				}


				String draw=seriePers.getDraw();
				if(model.isSeriesDrawPersonalization()==true && draw!=null && !draw.equalsIgnoreCase("")){
					int index=comboDraw.indexOf(draw);
					comboDraw.select(index);
				}
				else{
					comboDraw.select(0);
				}

				if(model.isSeriesScalesPersonalization()==true){
					int scale=seriePers.getScale();
					int index=comboScale.indexOf(Integer.valueOf(scale).toString());
					comboScale.select(index);
				}


				parsTable.redraw();
				newSerLabel.setEnabled(true);
				newSerLabelText.setEnabled(true);
				colorLabel.setEnabled(true);
				colorButton.setEnabled(true);
				drawLabel.setEnabled(true);
				comboDraw.setEnabled(true);
				scaleLabel.setEnabled(true);
				comboScale.setEnabled(true);
				newColorLabel.setEnabled(true);
				buttonRem.setEnabled(true);
			}	
		});



		//		// Add listener that show details of parameter selected
		//		parsList.addListener (SWT.Selection, new Listener () {
		//			public void handleEvent (Event e) {
		//				// get par selected
		//				int selection = parsList.getSelectionIndex();
		//				String parNameSelected=parsList.getItem(selection);
		//				// put the default value
		//				newSerName.setText(parNameSelected);
		//				SeriePersonalization seriePers=model.getSeriesPersonalizationHashMap().get(parNameSelected);
		//				newSerLabelText.setText(seriePers.getLabel()!=null ? seriePers.getLabel() : "");
		//				String draw=seriePers.getDraw();
		//				if(draw!=null && !draw.equalsIgnoreCase("")){
		//					int index=comboDraw.indexOf(draw);
		//					comboDraw.select(index);
		//				}
		//				else{
		//					comboDraw.select(0);
		//				}
		//
		//				int scale=seriePers.getScale();
		//				int index=comboScale.indexOf(Integer.valueOf(scale).toString());
		//				comboScale.select(index);
		//
		//
		//				if(seriePers.getColor()!=null){
		//					Color newColor = new Color(parentShell.getDisplay(), seriePers.getColor());
		//					colorLabel.setBackground(newColor);
		//				}
		//				else
		//				{
		//					colorLabel.setBackground(null);
		//				}
		//
		//				newSerLabel.setEnabled(true);
		//				newSerLabelText.setEnabled(true);
		//				colorLabel.setEnabled(true);
		//				colorButton.setEnabled(true);
		//				drawLabel.setEnabled(true);
		//				comboDraw.setEnabled(true);
		//				scaleLabel.setEnabled(true);
		//				comboScale.setEnabled(true);
		//				newColorLabel.setEnabled(true);
		//				buttonRem.setEnabled(true);
		//			}	
		//		});


		// Add Button Listener
		Listener cancelListener = new Listener() {
			public void handleEvent(Event event) {
				model.getEditor().setIsDirty(true);			
				int index=parsTable.getSelectionIndex();
				TableItem item=parsTable.getItem(index);
				String namePar=item.getText(NAME);
				//remove from java list 
				newSerLabelText.setText("");
				colorLabel.setBackground(null);

				if(model.getSeriesPersonalizationHashMap().containsKey(namePar)){
					model.getSeriesPersonalizationHashMap().remove(namePar);
				}
				//				colorLabel.setEnabled(false);
				//				colorButton.setEnabled(false);
				//				newSerLabel.setEnabled(false);
				//				newSerLabelText.setEnabled(false);
				//				drawLabel.setEnabled(false);
				//				comboDraw.setEnabled(false);
				//				comboScale.setEnabled(false);
				//				newColorLabel.setEnabled(false);
				parsTable.remove(index);
				buttonRem.setEnabled(false);
				//				parsList.pack();			
			}
		};
		buttonRem.addListener(SWT.Selection, cancelListener);
		buttonRem.setEnabled(false);
		group.pack();
		sectionClientSeries.pack();
		sectionSeries.setClient(sectionClientSeries);



	}








	public void setVisible(boolean visible){
		sectionSeries.setVisible(visible);

	}

	public boolean isVisible(){
		if(sectionSeries.isVisible())return true;
		else return false;
	}


	/** Among labels, color, draws personalizations allow only those recorded in config file
	 * 
	 * @param labels
	 * @param colors
	 * @param draws
	 */
	public void enablePersonalizations(boolean labels, boolean colors, boolean draws, boolean scales){
		newSerLabel.setVisible(labels);
		newSerLabelText.setVisible(labels);
		colorLabel.setVisible(colors);
		colorButton.setVisible(colors);
		drawLabel.setVisible(draws);
		comboDraw.setVisible(draws);
		scaleLabel.setVisible(scales);
		comboScale.setVisible(scales);
		newColorLabel.setVisible(colors);
	}

	public void eraseComposite(){
		parsTable.removeAll();
		newSerName.setText("");
		newSerLabelText.setText("");
		colorLabel.setBackground(null);
		comboDraw.select(0);
		comboScale.select(0);
	}

	public void refillFieldsSeriesPersonalization(final ChartModel model, final ChartEditor editor, FormToolkit toolkit, final ScrolledForm form){
		if(model.getSeriesPersonalizationHashMap()!=null){
			for (Iterator iterator = model.getSeriesPersonalizationHashMap().keySet().iterator(); iterator.hasNext();) {
				String serName = (String) iterator.next();
				SeriePersonalization serPers=model.getSeriesPersonalizationHashMap().get(serName);
				TableItem tI=new TableItem(parsTable, SWT.NONE);
				tI.setText(NAME, serPers.getName());
				tI.setText(COLOR,serPers.getColor()!=null ? ChartEditor.convertRGBToHexadecimal(serPers.getColor()) : "");
				tI.setText(LABEL,serPers.getLabel()!=null ? serPers.getLabel() : "");
				tI.setText(DRAW,serPers.getDraw()!=null ? serPers.getDraw() : "");
				tI.setText(SCALE,(Integer.valueOf(serPers.getScale())).toString());
			}
			parsTable.redraw();
		}
	}

}
