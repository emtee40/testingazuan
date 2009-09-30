package it.eng.spagobi.studio.chart.editors;

import it.eng.spagobi.studio.chart.editors.model.chart.ChartModel;
import it.eng.spagobi.studio.chart.editors.model.chart.Parameter;
import it.eng.spagobi.studio.core.log.SpagoBILogger;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.forms.events.ExpansionAdapter;
import org.eclipse.ui.forms.events.ExpansionEvent;
import org.eclipse.ui.forms.widgets.FormToolkit;
import org.eclipse.ui.forms.widgets.ScrolledForm;
import org.eclipse.ui.forms.widgets.Section;
import org.eclipse.ui.forms.widgets.TableWrapData;

public class ConfigurationEditor {

	final Section sectionConf; 
	Composite sectionClientConf=null;

	Group specificConfGroup=null;


	/**
	 * This editor draws th configuration parameters section
	 */

	public ConfigurationEditor(FormToolkit toolkit, final ScrolledForm form) {
		sectionConf = toolkit.createSection(form.getBody(), 
				Section.DESCRIPTION|Section.TITLE_BAR|Section.TWISTIE);

		sectionClientConf=toolkit.createComposite(sectionConf);



	}

	/** Creates the form for common configuraiton parameters
	 * 
	 * @param model
	 * @param editor
	 * @param toolkit
	 * @param form
	 */

	public void createConfigurationParametersForm(ChartModel model, final ChartEditor editor,FormToolkit toolkit,final ScrolledForm form) {

		SpagoBILogger.infoLog("Create configuration parameters form");

		TableWrapData td = new TableWrapData(TableWrapData.FILL);

		td = new TableWrapData(TableWrapData.FILL);
		td.rowspan = 3;
		sectionConf.setLayoutData(td);
		sectionConf.addExpansionListener(new ExpansionAdapter() {
			public void expansionStateChanged(ExpansionEvent e) {
				form.reflow(true);
			}
		});		

		sectionConf.setText("Chart conf settings");
		sectionConf.setDescription("Below you see the chart configuration settings:");


		GridLayout gl = new GridLayout();
		gl.numColumns = 2;
		sectionClientConf.setLayout(gl);

		// run all sections
		for (Iterator iteratorSec = model.getConfSectionParametersEditor().keySet().iterator(); iteratorSec.hasNext();) {
			String secName = (String) iteratorSec.next();
			ArrayList<String> parsInSection=model.getConfSectionParametersEditor().get(secName);
			if(parsInSection!=null && !parsInSection.isEmpty()){
				Label sectionLabel = new Label(sectionClientConf, SWT.BORDER | SWT.BOLD );
				sectionLabel.setForeground(new Color(sectionClientConf.getDisplay(),0,0,255));
				sectionLabel.setSize(12, 12);
				//sectionLabel.setFont(new Font(section.getDisplay(),FontData.))
				sectionLabel.setText(secName.toUpperCase());
				Label spaceLabel = new Label(sectionClientConf, SWT.NULL);
				spaceLabel.setText("");
				// run all parameters in section
				for (Iterator iterator = parsInSection.iterator(); iterator.hasNext();) {
					String parName = (String) iterator.next();
					SpagoBILogger.infoLog("Parameter "+parName);
					final Parameter aParameter=model.getConfParametersEditor().get(parName);
					ChartEditorUtils.drawParameter(editor, sectionClientConf, aParameter, toolkit);					

				}
			}
		}
		sectionConf.setClient(sectionClientConf);
	}


	/** Creates the form for specific configuraiton parameters
	 * 
	 * @param model
	 * @param editor
	 * @param toolkit
	 * @param form
	 */


	public void createSpecificConfigurationParametersForm(ChartModel model, final ChartEditor editor, FormToolkit toolkit) {
		SpagoBILogger.infoLog("Create specific configuration parameters form");


		GridLayout gl = new GridLayout();
		gl.numColumns = 2;
		sectionClientConf.setLayout(gl);

		if(specificConfGroup!=null){
			specificConfGroup.dispose();
		}

		specificConfGroup=new Group(sectionClientConf, SWT.SHADOW_IN);
		GridLayout gridLayout=new GridLayout();
		gridLayout.numColumns=2;
		specificConfGroup.setLayout(gridLayout);

		specificConfGroup.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_END));


		specificConfGroup.setVisible(false);
		//specificConfGroup.pack();
		// run all sections
		for (Iterator iteratorSec = model.getConfSpecificSectionParametersEditor().keySet().iterator(); iteratorSec.hasNext();) {
			String secName = (String) iteratorSec.next();
			ArrayList<String> parsInSection=model.getConfSpecificSectionParametersEditor().get(secName);
			if(parsInSection!=null && !parsInSection.isEmpty()){
				// run all parameters in section
				int i=1;
				// check how many parameters specific and resize group
				int n=parsInSection.size();
				//specificConfGroup.setSize(1000, n*50);
				//specificConfGroup.pack();
				for (Iterator iterator = parsInSection.iterator(); iterator.hasNext();) {
					String parName = (String) iterator.next();
					final Parameter aParameter=model.getConfSpecificParametersEditor().get(parName);
					ChartEditorUtils.drawSpecificParameter(editor, specificConfGroup, aParameter, toolkit,i);					
					i++;
				}
			}
			String title="PARAMETERS SPECIFIC FOR "+model.getSubType().toUpperCase()+" SUBTYPE";
			//add some text for title 
			for(int i=title.length();i<110;i++){
				//				if(i%2==0){
				title+=" ";
				//				}
				//				else{
				//					title=" "+title;
				//				}
			}
			specificConfGroup.setText(title);


			//specificConfGroup.pack();
			specificConfGroup.setVisible(true);
			sectionClientConf.redraw();
			sectionClientConf.pack();
			sectionConf.pack();		
		}


	}









	public Section getSectionConf() {
		return sectionConf;
	}


	public Composite getSectionClientConf() {
		return sectionClientConf;
	}


	public void setVisible(boolean visible){
		sectionConf.setVisible(visible);

	}

	public boolean isVisible(){
		if(sectionConf.isVisible())return true;
		else return false;
	}

	public Group getSpecificConfGroup() {
		return specificConfGroup;
	}

	public void setSpecificConfGroup(Group specificConfGroup) {
		this.specificConfGroup = specificConfGroup;
	}


}
