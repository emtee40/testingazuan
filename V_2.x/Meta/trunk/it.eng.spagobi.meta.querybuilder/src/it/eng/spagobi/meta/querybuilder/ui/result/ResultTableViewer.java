package it.eng.spagobi.meta.querybuilder.ui.result;

import java.util.List;

import it.eng.qbe.datasource.IDataSource;
import it.eng.qbe.model.structure.IModelNode;
import it.eng.qbe.model.structure.ViewModelEntity;
import it.eng.qbe.model.structure.ViewModelStructure;
import it.eng.qbe.query.Query;
import it.eng.qbe.statement.QbeDatasetFactory;
import it.eng.spagobi.meta.querybuilder.model.QueryProvider;
import it.eng.spagobi.meta.querybuilder.ui.tree.ModelStructureBuilder;
import it.eng.spagobi.tools.dataset.bo.IDataSet;
import it.eng.spagobi.tools.dataset.common.datastore.IDataStore;

import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.TableColumn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResultTableViewer extends TableViewer {
	
	private ViewModelStructure modelStructure;
	private IDataSet dataSet;
	private ResultTableComparator comparator;
	private static final int defaultColumnWidth = 100;

	private static Logger logger = LoggerFactory.getLogger(ResultTableViewer.class);
	
	
	public ResultTableViewer(Group groupQueryResult, ViewModelStructure modelStructure){
		super(groupQueryResult, SWT.BORDER | SWT.FULL_SELECTION);
		this.modelStructure = modelStructure;
		updateDataSet();
		getTable().setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true, 1, 1));
		setLabelProvider(new ResultTableLabelProvider());
		setContentProvider(new ResultTableContentProvider());
		getTable().setLinesVisible(true);
		getTable().setHeaderVisible(true);
		comparator = new ResultTableComparator();
		setComparator(comparator);
		refresh();
	}
	
	public IDataStore loadData(IDataSet dataSet, int offset, int fetchSize, int maxResults){
		logger.debug("IN");
		try {
			dataSet.loadData(offset,fetchSize,maxResults);
		} catch (Throwable e) {
			e.printStackTrace();
		}
		IDataStore dataStore = dataSet.getDataStore();
		
		logger.debug("OUT");
		
		return dataStore;
	}
	
	public void updateTable(int offset, int fetchSize, int maxResults){
		TableColumn[] columns = getTable().getColumns();
		if(columns!=null){
			for(int i=0; i<columns.length; i++){
				columns[i].dispose();
			}
		}
		if(QueryProvider.getQuery().isEmpty()) {
			final TableColumn column = new TableColumn(getTable(), SWT.NONE);
			column.setWidth(defaultColumnWidth);
			column.setText("");
			column.setResizable(true);
			setInput(loadData(dataSet, offset, fetchSize, maxResults));
		} else {
			updateDataSet();
			loadFirstResultAndHeaders(offset, fetchSize, maxResults);
		}
	
		
	}
	
	private void updateDataSet(){
		IDataSource datasource = modelStructure.getDataSource();
		
//		Query query = new Query();
//		List entities = modelStructure.getRootEntities("foodmart");
//		if(entities.size() > 0) {
//			ViewModelEntity entity = (ViewModelEntity)entities.get(0);
//			List fields = entity.getAllFields();
//			for(int i = 0; i < fields.size(); i++) {
//					IModelNode field = (IModelNode)fields.get(i);
//					query.addSelectFiled(field.getUniqueName(), null, field.getName(), true, true, false, null, null);
//			}
//		}	
		
		
		Query query = QueryProvider.getQuery();
		this.dataSet =  QbeDatasetFactory.createDataSet(modelStructure.getDataSource().createStatement(query));
	}
	
	private void loadFirstResultAndHeaders(int offset, int fetchSize, int maxResults){
		
		logger.debug("IN");
		try {
			IDataStore dataStore = loadData(dataSet, offset, fetchSize, maxResults);
			List<String> headers = DataStoreReader.getColumnNames(dataStore);
			for(int i =0; i<headers.size(); i++){
				final TableColumn column = new TableColumn(getTable(), SWT.NONE);
				column.setWidth(defaultColumnWidth);
				column.setText(headers.get(i));
				column.setResizable(true);
				column.setMoveable(true);
				column.addSelectionListener(getSelectionAdapter(column, i));
			}
			setInput(dataStore);
		} catch (Exception e) {
			// TODO: handle exception
		}

		
		logger.debug("OUT");
	}
	
	private SelectionAdapter getSelectionAdapter(final TableColumn column, final int index) {
		SelectionAdapter selectionAdapter = new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				comparator.setColumn(index);
				int dir = getTable().getSortDirection();
				if (getTable().getSortColumn() == column) {
					dir = dir == SWT.UP ? SWT.DOWN : SWT.UP;
				} else {

					dir = SWT.DOWN;
				}
				getTable().setSortDirection(dir);
				getTable().setSortColumn(column);
				refresh();
			}
		};
		return selectionAdapter;
	}
}
