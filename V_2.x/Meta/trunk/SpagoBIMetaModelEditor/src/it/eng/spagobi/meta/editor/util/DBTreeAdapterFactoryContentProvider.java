package it.eng.spagobi.meta.editor.util;

import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalForeignKey;
import it.eng.spagobi.meta.model.physical.PhysicalModel;
import it.eng.spagobi.meta.model.physical.PhysicalPrimaryKey;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import org.eclipse.emf.common.notify.AdapterFactory;
import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.edit.ui.provider.AdapterFactoryContentProvider;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.widgets.Display;

public class DBTreeAdapterFactoryContentProvider extends AdapterFactoryContentProvider{
	private static Object[] EMPTY_ARRAY = new Object[0];
	public TreeViewer tree;
	
	public DBTreeAdapterFactoryContentProvider(AdapterFactory adapterFactory, TreeViewer treeViewer) {
		super(adapterFactory);
		tree = treeViewer;
	}
	
	@Override
	public Object [] getElements(Object inputElement) {
		if(inputElement instanceof PhysicalModel) {
			return getChildren(inputElement);
		}
		return null;
	}
	@Override
	public Object [] getChildren(Object parentElement) {
	    if(parentElement instanceof PhysicalModel) {
	    	PhysicalModel model = (PhysicalModel)parentElement;
	    	PrimaryKeysFolder pkFolder = new PrimaryKeysFolder(model.getPrimaryKeys().toArray());
	    	ForeignKeysFolder fkFolder = new ForeignKeysFolder(model.getForeignKeys().toArray());
	    	return concat(model.getTables().toArray(), 
	    			new Object[]{ pkFolder },
	    			new Object[]{ fkFolder });
	    }
	    
	    if(parentElement instanceof PhysicalTable) {
	        PhysicalTable table = (PhysicalTable)parentElement;
	        if (table.getPrimaryKey() != null)
	        	return concat(table.getColumns().toArray(), new Object[]{table.getPrimaryKey()} ,table.getForeignKeys().toArray());
	        else
	        	return concat(table.getColumns().toArray(), table.getForeignKeys().toArray()); 
		}
	    
	    if(parentElement instanceof PhysicalColumn) {
	    	PhysicalColumn col = (PhysicalColumn)parentElement;
			return new Object[]{ "Type: "+col.getTypeName(), "Size: "+col.getSize()};
	    }
	    if(parentElement instanceof PrimaryKeysFolder) {
	    	PrimaryKeysFolder pkFolder = (PrimaryKeysFolder)parentElement;
			return pkFolder.getArrayPK();
	    }
	    if(parentElement instanceof ForeignKeysFolder) {
	    	ForeignKeysFolder fkFolder = (ForeignKeysFolder)parentElement;
			return fkFolder.getArrayFK();
	    }	    
	    if(parentElement instanceof PhysicalPrimaryKey) {
	    	PhysicalPrimaryKey pk = (PhysicalPrimaryKey)parentElement;
			return pk.getColumns().toArray();
	    }
	    if(parentElement instanceof PhysicalForeignKey) {
	    	PhysicalForeignKey fk = (PhysicalForeignKey)parentElement;
			return concat(fk.getSourceColumns().toArray(),fk.getDestinationColumns().toArray());
	    }
	    return EMPTY_ARRAY;
	}

	@Override
	public Object getParent(Object element) {

	    if(element instanceof PhysicalTable) {
	        return ((PhysicalTable)element).getModel();
	    }	
	    if(element instanceof PhysicalColumn) {
	        return ((PhysicalColumn)element).getTable();
	    }	
	    return null;
	}	
	
	@Override
	public boolean hasChildren(Object element) {
		return getChildren(element).length > 0;
	}
	
	protected Object[] concat(Object[] object, Object[] more, Object[] more2) {
		Object[] both = new Object[object.length + more.length + more2.length];
		System.arraycopy(object, 0, both, 0, object.length);
		System.arraycopy(more, 0, both, object.length, more.length);
		System.arraycopy(more2, 0, both, object.length + more.length, more2.length);		
		return both;
	}
	protected Object[] concat(Object[] object, Object[] more) {
		Object[] both = new Object[object.length + more.length];
		System.arraycopy(object, 0, both, 0, object.length);
		System.arraycopy(more, 0, both, object.length, more.length);	
		return both;
	}	
	
	//update the tree when the model is changed
	@Override
	public void notifyChanged(Notification notification)
	{
		Display.getDefault().asyncExec(new Runnable()
		{
			@Override
			public void run()
			{
				if (!tree.getTree().isDisposed())
				{
					tree.refresh(true);
				}
			}
		});
	} 
	
	
}
