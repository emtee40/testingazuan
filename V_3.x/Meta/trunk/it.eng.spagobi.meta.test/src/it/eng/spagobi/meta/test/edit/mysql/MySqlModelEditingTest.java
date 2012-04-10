package it.eng.spagobi.meta.test.edit.mysql;

import it.eng.spagobi.meta.model.business.BusinessColumn;
import it.eng.spagobi.meta.model.business.BusinessTable;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalTable;
import it.eng.spagobi.meta.test.TestCostants;
import it.eng.spagobi.meta.test.TestModelFactory;
import it.eng.spagobi.meta.test.edit.AbstractModelEditingTest;

import org.junit.Assert;


public class MySqlModelEditingTest extends AbstractModelEditingTest {

	public void setUp() throws Exception {
		super.setUp();
		try {
			if(dbType == null) dbType = TestCostants.DatabaseType.MYSQL;
			
			if(rootModel == null) {
				rootModel = TestModelFactory.createModel( dbType );
				if(rootModel != null && rootModel.getPhysicalModels() != null && rootModel.getPhysicalModels().size() > 0) {
					physicalModel = rootModel.getPhysicalModels().get(0);
				}
				if(rootModel != null && rootModel.getBusinessModels() != null && rootModel.getBusinessModels().size() > 0) {
					businessModel = rootModel.getBusinessModels().get(0);
				}
			}
		} catch(Exception t) {
			System.err.println("An unespected error occurred during setUp: ");
			t.printStackTrace();
			throw t;
		}
	}
	
	public void testModelInitializationSmoke() {
		super.testModelInitializationSmoke();
	}
	
	public void testPhysicalModelInitializationSmoke() {
		super.testPhysicalModelInitializationSmoke();
	}
	
	public void testBusinessModelInitializationSmoke() {
		super.testBusinessModelInitializationSmoke();	
	}
	
	
	public void testBusinessTableGetByPhysicalTable() {
		PhysicalTable physicalTable =  physicalModel.getTable("currency");
		BusinessTable businessTable = businessModel.getBusinessTable(physicalTable);
	
		Assert.assertNotNull(businessTable);
	}
	
	public void testBusinessColumnGetByPhysicalColumn() {
		PhysicalTable physicalTable =  physicalModel.getTable("currency");
		PhysicalColumn physicalColumn = physicalTable.getColumn("currency");
		BusinessTable businessTable = businessModel.getBusinessTable(physicalTable);
		BusinessColumn businessColumn = businessTable.getSimpleBusinessColumn(physicalColumn);
		
		Assert.assertNotNull(businessColumn);
		Assert.assertTrue( businessTable.getColumns().contains(businessColumn) );
	}
	
	public void testBusinessColumnGetByIndex() {
		PhysicalTable physicalTable =  physicalModel.getTable("currency");
		PhysicalColumn physicalColumn = physicalTable.getColumn("currency");
		BusinessTable businessTable = businessModel.getBusinessTable(physicalTable);
		BusinessColumn businessColumn = businessTable.getSimpleBusinessColumn(physicalColumn);
		
		int columnIndex = businessTable.getColumns().indexOf(businessColumn);
		Assert.assertTrue( columnIndex != -1 );
		BusinessColumn column = businessTable.getColumns().get(columnIndex);
		Assert.assertNotNull( column );
		Assert.assertTrue( column.equals(businessColumn) );
		Assert.assertTrue( column ==  businessColumn);
	}
	
	public void testBusinessColumnGetByName() {
		PhysicalTable physicalTable =  physicalModel.getTable("currency");
		PhysicalColumn physicalColumn = physicalTable.getColumn("currency");
		BusinessTable businessTable = businessModel.getBusinessTable(physicalTable);
		BusinessColumn businessColumn = businessTable.getSimpleBusinessColumn(physicalColumn);
		
		String businessColumnName = businessColumn.getName();
		Assert.assertNotNull(businessColumnName);
		BusinessColumn column = businessTable.getSimpleBusinessColumn( businessColumnName );
		Assert.assertNotNull(column);
		Assert.assertTrue( column.equals(businessColumn) );
		Assert.assertTrue( column ==  businessColumn);
	}
	
	public void testBusinessColumnDeletion() {
		PhysicalTable physicalTable =  physicalModel.getTable("currency");
		PhysicalColumn physicalColumn = physicalTable.getColumn("currency");
		BusinessTable businessTable = businessModel.getBusinessTable(physicalTable);
		BusinessColumn businessColumn = businessTable.getSimpleBusinessColumn(physicalColumn);
		String businessColumnUniqueName = businessColumn.getUniqueName();
		
		Assert.assertEquals(4, businessTable.getColumns().size());
		Assert.assertTrue(businessTable.getColumns().remove(businessColumn));
		Assert.assertEquals(3, businessTable.getColumns().size());
		Assert.assertNull( businessTable.getSimpleBusinessColumnsByPhysicalColumn(physicalColumn) );
		Assert.assertEquals( 1, businessTable.getSimpleBusinessColumnsByPhysicalColumn(physicalColumn).size());
		Assert.assertNull( businessTable.getSimpleBusinessColumnByUniqueName( businessColumnUniqueName ) );	
	}
	

	
	
	
	
}
